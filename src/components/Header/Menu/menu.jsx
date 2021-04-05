import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateRequestClose } from "../../../appSlice";
import MenuItem from "./menu-item";
import { updateMenuState } from "./menuSlice";
import { Link } from "react-router-dom";
import "./_menu.scss";

function Menu() {
  //console.log('menu');
  const state = useSelector((state) => state.menu);
  const stateApp = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const [nav, setNav] = useState("");
  const [li, setLi] = useState("");

  const placeLiElement = (li, nav) => {
    let boundary_y = li[0].getBoundingClientRect().top;
    li.forEach((el, i) => {
      let top =
        el.getBoundingClientRect().top +
        el.getAttribute("data-group") * -11 -
        boundary_y;
      el.style.setProperty("--top", top);
      el.style.setProperty("--delay-close", `${i * 0.03}s`);
      el.style.setProperty("--delay-open", `${(li.length - i) * 0.03}s`);
    });
    nav.classList.toggle("nav-closed");
  };

  useEffect(() => {
    // actually dependency only include stateApp.requestClose
    if (stateApp.requestClose && !state.isClosing) {
      placeLiElement(li, nav);
      const actionMenu = updateMenuState(true);
      dispatch(actionMenu);

      const actionApp = updateRequestClose(false);
      dispatch(actionApp);
    }
  }, [stateApp.requestClose, li, nav, dispatch, state.isClosing]);

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

    placeLiElement(liElement, navElement);

    const action = updateMenuState(true);
    dispatch(action);
  }, [dispatch]);

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
            <MenuItem
              data={data}
              isHiddingMenu={isHiddingMenu}
              handleHideMenu={HandleHiddenMenu}
            />
          </li>
        );
      });
    return res;
  };

  const HandleHiddenMenu = (e) => {
    let temp = !state.isClosing;

    placeLiElement(li, nav);

    e.stopPropagation();

    const action = updateMenuState(temp);
    dispatch(action);
    const actionApp = updateRequestClose(false);
    dispatch(actionApp);
  };

  return (
    <div className="fluid-container menu">
      <div className="row">
        <div className="col hidden-menu-container">
          <ul className="hidden-menu" id="hidden-menu">
            {showMenu(state.isClosing)}

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
