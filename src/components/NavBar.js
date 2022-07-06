import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksComponent = links.map(link => {
    return <a href={`#${link}`} key={link} >{link}</a>
  })

  return (
     <nav>
      {linksComponent}
      </nav>
     );
}

export default NavBar;
