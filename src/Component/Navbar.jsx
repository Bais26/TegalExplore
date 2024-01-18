import React from "react";
import Navitems from "./Navitems";

function navbar() {
  const listnav = [
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Sejarah",
      url: "/sejarah",
    },
    {
      name: "Wisata",
      url: "/wisata",
    },
    {
      name: "Adat",
      url: "/adat",
    },
    {
      name: "Makanan",
      url: "/makanan",
    },
  ];
  return (
    <div className="flex justify-between mx-12 p-4">
      <img src="./src/assets/Logoku.png" alt="" />
      <div className="flex items-center gap-10">
        {listnav.map((items, index) => {
          return <Navitems key={index} name={items.name} url={items.url} />;
        })}
      </div>
    </div>
    
  );
}

export default navbar;
