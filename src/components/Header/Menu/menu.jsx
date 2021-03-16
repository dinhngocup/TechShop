import React, { useState, useEffect } from "react";
import "./_menu.scss";
import { Link } from "react-router-dom";
import MenuItem from "./menu-item";

function Menu() {
  const [isHiddingMenu, setIsHiddingMenu] = useState(false);
  const [nav, setNav] = useState("");
  const [li, setLi] = useState("");

  //const [menuItems, setMenuItems] = useState("");

  const placeLiElement = (li, nav) => {
    let boundary_y = li[0].getBoundingClientRect().top;
    li.forEach((el, i) => {
      let top =
        el.getBoundingClientRect().top +
        el.getAttribute("data-group") * -11 -
        boundary_y;
      el.style.setProperty("--top", top);
      el.style.setProperty("--delay-close", `${i * 0.1}s`);
      el.style.setProperty("--delay-open", `${(li.length - i) * 0.1}s`);
    });
    nav.classList.toggle("nav-closed");
    
  }
 

  //get nav & li position
  useEffect(() => {
    let navElement = document.getElementById("hidden-menu");
    let liElement = navElement.querySelectorAll("li");
    let group_size = Math.ceil(liElement.length / 3);
    let group_index = 0;
    setNav(navElement);
    setLi(liElement);
    liElement.forEach((e, i) => {
      e.setAttribute("data-group", group_index);
      group_index =
        i % group_size === group_size - 1 ? group_index + 1 : group_index;
    });

    setIsHiddingMenu(true);
    placeLiElement(liElement, navElement);
    //console.log('1', isHiddingMenu);

  }, []);

  const showMenu = (isHiddingMenu) => {
    const menuItemsFromDB = [
      {
        label: "Home",
        to: "/home",
        activeOnlyWhenExact: false,
      },
      {
        label: "Contacts",
        to: "/contacts",
        activeOnlyWhenExact: false,
      },
      {
        label: "News",
        to: "/news",
        activeOnlyWhenExact: false,
      },
      {
        label: "Products",
        to: "/products",
        activeOnlyWhenExact: false,
      },
      {
        label: "Sales",
        to: "/sales",
        activeOnlyWhenExact: false,
      },
    ];

    let res = null;
    if (menuItemsFromDB.length > 0)
      res = menuItemsFromDB.map((item, index) => {
        let data = {
          label: item.label,
          to: item.to,
          activeOnlyWhenExact: item.activeOnlyWhenExact,
        };

        return (
          <li key={index}>
            <MenuItem data={data} 
            isHiddingMenu={isHiddingMenu} 
            handleHideMenu={HandleHiddenMenu}/>
          </li>
        );
      });
    return res;
  };

  const HandleHiddenMenu = (e) => {
    setIsHiddingMenu(!isHiddingMenu);
    //console.log('2', isHiddingMenu);



    // if declare e.preventDef and e.stopPropa, direct to new page is prevented
    //e.preventDefault();

    placeLiElement(li, nav);

    //e.stopPropagation();
  };
  return (
    
    <div className="fluid-container menu">
      <div className="row">
        <div className="col hidden-menu-container">
          <ul className="hidden-menu" id="hidden-menu">
            {showMenu(isHiddingMenu)}  
            
            <button className="nav-toggle" onClick={HandleHiddenMenu}>
              X
            </button>
          </ul>
        </div>
        <div className="col">
          <Link className="shop-name" to="/home">
            TechShop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
