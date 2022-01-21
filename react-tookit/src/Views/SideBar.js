import React from "react";
import { useSelector } from "react-redux";
function SideBar() {
  const sidebar = useSelector((state) => state.sidebar.value);
  
  return (
    <div id="slide-out" className="side-nav sn-bg-4 fixed" style={sidebar ? {width : '240px', transform: 'translateX(0)'}:{}  }>
      <ul className="custom-scrollbar">
        <li>
          <div className="logo-wrapper waves-light">
            <a href="#">
              <img
                src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
                className="img-fluid flex-center"
              />
            </a>
          </div>
        </li>
        <li>
          <ul className="social">
            <li>
              <a href="#" className="icons-sm fb-ic">
                <i className="fab fa-facebook-f"> </i>
              </a>
            </li>
            <li>
              <a href="#" className="icons-sm pin-ic">
                <i className="fab fa-pinterest"> </i>
              </a>
            </li>
            <li>
              <a href="#" className="icons-sm gplus-ic">
                <i className="fab fa-google-plus-g"> </i>
              </a>
            </li>
            <li>
              <a href="#" className="icons-sm tw-ic">
                <i className="fab fa-twitter"> </i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <form className="search-form" role="search">
            <div className="form-group md-form mt-0 pt-1 waves-light">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </form>
        </li>
        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <a className="collapsible-header waves-effect arrow-r">
                <i className="fas fa-chevron-right"></i> Submit blog
                <i className="fas fa-angle-down rotate-icon"></i>
              </a>
              <div className="collapsible-body">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="waves-effect">
                      Submit listing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      Registration form
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a className="collapsible-header waves-effect arrow-r">
                <i className="fas fa-hand-pointer"></i> Instruction
                <i className="fas fa-angle-down rotate-icon"></i>
              </a>
              <div className="collapsible-body">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="waves-effect">
                      For bloggers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      For authors
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a className="collapsible-header waves-effect arrow-r">
                <i className="fas fa-eye"></i> About
                <i className="fas fa-angle-down rotate-icon"></i>
              </a>
              <div className="collapsible-body">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="waves-effect">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      Monthly meetings
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a className="collapsible-header waves-effect arrow-r">
                <i className="far fa-envelope"></i> Contact me
                <i className="fas fa-angle-down rotate-icon"></i>
              </a>
              <div className="collapsible-body">
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="waves-effect">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      Write a message
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      Write a message
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      Write a message
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="waves-effect">
                      Write a message
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <div className="sidenav-bg mask-strong"></div>
    </div>
  );
}

export default SideBar;
