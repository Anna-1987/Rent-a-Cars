import React from "react";
import s from './Homepage.module.css';

const HomePage = ()=>{
    return(
        <div className={s.homeblock}>
             <div className={s.hometext}>
             <h1>
            Welcome to our car rental website!
            </h1>
            <p>We are sure that you will find what you need.</p>
           < button type="button" className={s.homebtn}>Let's go!</button>
             </div>

        </div>
       
    )
}

export default HomePage;