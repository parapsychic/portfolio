import React, {  useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const titles = [
    { text: "Febin", highlight: "." },
    { text: "About", highlight: " Febin" },
    { text: "Skills", highlight: "." },

  ]


  const [title] = useState(titles[0]);

  return (
    <section className="py-5 px-5 bg-main-blue z-10 text-center flex w-full fixed top-0 lg:bg-transparent">
      <Link  to='/'>
        <h1 className="text-xl text-white lg:text-3xl hover:text-highlight-font">{title.text}<span className="text-highlight-font">{title.highlight}</span></h1>
      </Link>

    </section>

  );
};

export default Header;