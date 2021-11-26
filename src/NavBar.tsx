import React ,{useEffect}from 'react'
import './Nav.css'
import $ from 'jquery'
export const NavBar = () => {
    useEffect(() => {
    $("#navButton").on("click", function () {
      $(".navbar").fadeToggle();
    });

    // setup a global state flag
  });
    return (
        <div className="nav">
             <div id="navButton">
          <i className="fa fa-bars"></i>
        </div>

            <h2>User Places</h2>
            
       
            <ul className="navbar">
                <li>
                    <a href="/">All Usesr</a>
                </li>
                 <li>
                    <a href="/userlist">users list</a>
                </li>
                 <li>
                    <a href="/signin">Sign In</a>
                </li>
                 <li>
                    <a href="/signup">Sign up</a>
                </li>
            </ul>
        </div>
    )
}





  