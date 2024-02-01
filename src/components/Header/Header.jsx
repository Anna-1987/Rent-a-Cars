import React from "react";
// import {NavLink} from 'react-router-dom';
import s from './Header.module.css';


const Header = () =>{

    return (
        <div className={s.header}>
            <span>Rent 🚘 </span>

        <ul className={s.navigator}>
            <li className={s.navli}>
            <a href="../HomePage"  className={s.navtext} >Home</a>
            </li>
           
           <li className={s.navli}>
           <a href="../CatalogPage" className={s.navtext}>Catalog</a>
           </li>
           <li className={s.navli}>
           <a href="../HomePage" className={s.navtext}>Favorites</a>
            </li>
        </ul>

        </div>
    )
}

export default Header;