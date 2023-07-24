import React from "react";
import myImg from "../Images/IMG-20210702-WA0001jpg.0.jpg";

function Header() {
  return (
    <header className="flex p-5  items-center shadow-md">
      <img src={myImg} alt="profile" className="h-9 rounded-md" />
      <h1 className="text-4xl pl-5 text-black">Uzaif Keep Notes</h1>
    </header>
  );
}

export default Header;
