"use client";

import { useEffect, useState } from "react";

interface InventoryItem {
  item_id: number;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  supplier: string;
  price_per_unit: number;
  image_url?: string;
  description?: string;
}

const InventoryList = () => {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
  const [newQuantity, setNewQuantity] = useState<number | null>(null);

  // Carregar itens do JSON no public/data/inventory.json
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch("/data/inventory.json");
        const data: InventoryItem[] = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Erro ao buscar os dados do inventário:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  // Abrir modal para editar o item
  const openModal = (item: InventoryItem) => {
    setSelectedItem(item);
    setNewQuantity(item.quantity);
  };

  // Fechar modal
  const closeModal = () => {
    setSelectedItem(null);
    setNewQuantity(null);
  };

  // Salvar alterações no estado e simular persistência no JSON
  const saveChanges = async () => {
    if (selectedItem && newQuantity !== null) {
      const updatedItem = { ...selectedItem, quantity: newQuantity };

      // Atualizar o estado local
      const updatedItems = items.map((item) =>
        item.item_id === updatedItem.item_id ? updatedItem : item
      );
      setItems(updatedItems);

      try {
        // Simular escrita no arquivo JSON
        const response = await fetch("/management/update-inventory", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedItems),
        });

        if (!response.ok) {
          throw new Error("Erro ao atualizar o arquivo JSON.");
        }

        alert("Quantidade atualizada com sucesso!");
      } catch (error) {
        console.error("Erro ao salvar alterações:", error);
        alert("Erro ao salvar alterações.");
      } finally {
        closeModal();
      }
    }
  };

  if (loading) {
    return <div>Carregando itens do inventário...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventário de Materiais Veterinários</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.item_id}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center cursor-pointer"
            onClick={() => openModal(item)}
          >
            {/* <img
              src={item.image_url}
              alt={item.name}
              className="w-32 h-32 object-contain mb-4"
            /> */}
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.category}</p>
            <p>
              <span className="font-bold">Quantidade:</span> {item.quantity} {item.unit}
            </p>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-[90%] max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              Editar Quantidade: {selectedItem.name}
            </h2>
            <p className="mb-2">Quantidade Atual: {selectedItem.quantity}</p>
            <input
              type="number"
              value={newQuantity ?? ""}
              onChange={(e) => setNewQuantity(parseInt(e.target.value, 10))}
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={closeModal}
              >
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={saveChanges}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryList;
