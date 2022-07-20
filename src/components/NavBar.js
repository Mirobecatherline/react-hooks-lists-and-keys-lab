import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const strings=links.map((names,index)=>{return(<a key={index} href={"#"+names}>{names}</a>)})
  return <nav>{/* display an <a> tag for each link here */}
            {strings}
        </nav>;
}

export default NavBar;
