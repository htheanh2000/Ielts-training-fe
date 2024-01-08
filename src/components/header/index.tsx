import React from 'react';
import Logo from '@/ui-library/logo';
import { NavbarData, Navbar } from '@/constant/navbar';

const Header: React.FC = () => {
    return (
        <div className="container flex mx-auto my-4">
            <Logo />
            <nav className='ml-8'>
                {
                    NavbarData.map((item: Navbar, index: number) => {
                        return (
                            <a className='mr-2' key={index} href={item.url}>{item.name}   /</a>
                        );
                    })
                }
            </nav>
        </div>
    );
};

export default Header;
