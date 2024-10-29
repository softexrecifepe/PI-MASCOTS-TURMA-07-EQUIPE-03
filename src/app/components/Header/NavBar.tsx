import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav data-layername="navBar" className="flex flex-wrap gap-8 items-center self-center px-11 py-5 ml-2.5 bg-white border border-solid border-neutral-200 rounded-[54px] max-md:px-5 max-md:max-w-full">
      <div data-layername="mascots" className="self-stretch my-auto text-lg font-bold leading-none text-neutral-950">
        MASCOT'S
      </div>
      <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
        <div className="flex gap-10 items-center self-stretch my-auto text-lg leading-none min-w-[240px] text-neutral-950">
          <div data-layername="consulta" className="self-stretch my-auto w-[77px]">
            Consulta
          </div>
          <div data-layername="petShop" className="self-stretch my-auto">Pet Shop</div>
          <div data-layername="ofertas" className="self-stretch my-auto">Ofertas</div>
        </div>
        <div className="flex gap-6 items-center self-stretch my-auto text-base font-medium leading-none text-center text-white">
          <button data-layername="buttons" className="gap-2.5 self-stretch px-8 py-4 my-auto bg-indigo-500 rounded-[48px] max-md:px-5">
            Agendar Consulta
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;