import React from "react";
import { Button } from "./button";
import CardDemo from "./productCard";
import { Ghost } from "lucide-react";

const NavBar = () => {
  return (
    <header className="justify-content container fixed top-0 flex min-w-full bg-red-300">
      <div className="m-auto flex flex-1 justify-center font-serif">
        Bubbas Bakery
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-1 justify-end">
        <Button variant={"ghost"} className="font-serif">
          Home
        </Button>
        <Button variant={"ghost"} className="font-serif">
          Doughnuts
        </Button>
      </div>
    </header>
  );
};

export default NavBar;
