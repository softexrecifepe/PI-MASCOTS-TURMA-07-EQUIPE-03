import React from 'react';
import Logo from "../../../public/logo.svg";
import Image from 'next/image';
// interface ButtonProps {
//   label: string;
// }

const CompanyLogo: React.FC = () => {
  return (
    <div className="w-[50%]">
          <Image src={Logo} alt="Logo Mascots" sizes="100%" />
        </div>
  );
};

export { CompanyLogo };
