import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import NavBarSpan from "./NavBarSpan/NavBarSpan.jsx";
import CountCartProducts from "./CountCartProducts/CountCartProducts.jsx";
import useSession from "../../../hooks/useSession.js";
import './NavBar.css';
import MenuUser from "./HoverMenu/HoverMenu.jsx";

const menu = [{ name: 'Boards', to: '/shop/cat/boards' }, { name: 'Sails', to: '/shop/cat/sails' }, { name: 'Booms', to: '/shop/cat/booms' }];

function NavBar() {
  const {state} = useSession();
  const [showMenu, setShowMenu] = useState(false);

  const handleHoverMenu = (visible) => {
    setTimeout(() => {
      setShowMenu(visible)
    }, 2000)
  }


    console.log(state)

    

  return (
    <header className='navbar__header'>
      <div className='logo__div'>
        <Link to={'/'}>
          <img className="img-navbar__header" src="https://images.vexels.com/media/users/3/220663/isolated/preview/843bb32c4abc131c24a50db9645635c1-silueta-de-accion-de-windsurf.png" alt='logo menu' />
        </Link>
      </div>
      <div>
        <div className='menu-list__div'>
          {
            menu.map((item, index) => {
              return (
                <NavLink key={index} to={item.to}>
                  <NavBarSpan key={index} text={item.name} />
                </NavLink>
              )
            })
          }
          {
            state.loged ?
              <>
                <NavLink to='/user/cart'>
                  <CountCartProducts>
                    <NavBarSpan text='🛒' />
                  </CountCartProducts>
                </NavLink>
                <div
                  onMouseOver={() => setShowMenu(true)}
                  onMouseLeave={() => handleHoverMenu(false)}
                >
                  <NavLink to={'/user/profile'}>
                    <NavBarSpan text='👤' />
                  </NavLink>
                  <MenuUser 
                  onMouseOver={() => setShowMenu(true)}
                  onMouseLeave={() => handleHoverMenu(false)}
                  visible={showMenu} />
                </div>
              </>
              :
              <NavLink to={'/login'}>
                <NavBarSpan text='Login' />
              </NavLink>
          }
        </div>
      </div>
    </header>
  );
}

export default NavBar;