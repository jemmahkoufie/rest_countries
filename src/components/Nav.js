import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faMoon as darkMoon } from '@fortawesome/free-solid-svg-icons'
  import { faMoon as lightMoon } from '@fortawesome/free-regular-svg-icons'

export const Nav=(props)=>{
    return  <div className="nav-container">
        <nav>
            <div><h1>Where in the World ?</h1></div>
            <div className="themeMode" onClick={props.toggleTheme}><FontAwesomeIcon icon={props.toggleThemeIcon?darkMoon:lightMoon} />Dark Mode</div>
        </nav>

    </div>
}