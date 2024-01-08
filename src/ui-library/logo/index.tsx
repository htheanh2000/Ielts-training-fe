import Link from "next/link";
import React from "react";
import Image from "next/image"
interface LogoProps {}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Link href={'/'} className={`logo `}>
        <Image  src="/logo.svg" alt="Logo" />
    </Link>
  );
};

export default Logo;
