import { Link, NavLink } from "react-router-dom";
import NavBarSpan from "./NavBarSpan/NavBarSpan.jsx";
import CountCartProducts from "./CountCartProducts/CountCartProducts.jsx";
import { localStorage } from "../../../utils/utils.js";
import './NavBar.css';

const menu = [{ name: 'Boards', to: '/shop/cat/boards' }, { name: 'Sails', to: '/shop/cat/sails' }, { name: 'Booms', to: '/shop/cat/booms' }];

function NavBar() {
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
          <NavLink to='/cart'>
              {

                localStorage.cart !== undefined ?
                  <CountCartProducts>
                    <NavBarSpan text='🛒' />
                  </CountCartProducts>
                  :
                  <NavBarSpan text='🛒' />

              }
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default NavBar;