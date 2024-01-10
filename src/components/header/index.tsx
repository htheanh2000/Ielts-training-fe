'use client';

import React from "react";
import { NAV_LINKS, TLink } from "@/constant/navbar";
import Logo from "../logo";
import { Button, Input, Space } from "antd";
import Search, { SearchProps } from "antd/es/input/Search";

const Header: React.FC = () => {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
  };

  return (
    <div className="container flex-ic mx-auto justify-between h-24 ">
      {/* Left Side */}
      <div className="flex-ic">
        <Logo />
        <nav className="ml-8">
          {NAV_LINKS.map((item: TLink, index: number) => {
            return (
              <a className="mr-6 font-medium hover:underline p-2 underline-offset-2" key={index} href={item.path}>
                {item.name}
              </a>
            );
          })}
        </nav>
      </div>
      {/* Right Side */}
      <div className="flex-ic">
        <Search
          placeholder="What are you looking for?"
          allowClear
          onSearch={onSearch}
          size="large"
          style={{borderColor: '#ffffff00'}}
        />

        <Button href="/sign-in" className="ml-4 font-medium" type="text" size="large"> Sign In</Button>
        <Button href="/sign-up" className="ml-4 font-medium" type="default" size="large"> Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
