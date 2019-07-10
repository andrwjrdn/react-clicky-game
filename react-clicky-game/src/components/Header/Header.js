import React from "react";
import "./Header.css";
import nbalogo from "./nbalogo.jpg";

// Header
const Header = props => (

    <div id="header" className="container-fluid">

        <span className="headerSection" id="headerLeft">
            <img id="nbalogo" src={nbalogo} alt="nbamain" />
        </span>

        <span className="headerSection" id="headerMiddle">
            <h4 id="instructions">Click on a player to earn points. If you choose a player twice in a row, the game ends.</h4>
        </span>

        <span className="headerSection" id="headerRight">
            <img id="nbalogo2" src={nbalogo} alt="nbamain" />
        </span>

    </div>

)

export default Header;