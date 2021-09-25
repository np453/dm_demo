import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap'
import navicon from '../assets/logo.png';
import db from '../assets/dashboard.svg';
import company from '../assets/company.svg';
import project from '../assets/projects.svg';
import help from '../assets/help.svg';
import report from '../assets/report.svg';
import arrow from '../assets/arrow.svg';
import bell from '../assets/bell.svg';
import profile from '../assets/profile.svg';


const MyNavbar = props => { 
    
    // const [showdropdown, setshowdropdown]= useState(false);
    // const history = useHistory();
    
    // const handlearrowclick = () => {
    //     setshowdropdown(!showdropdown);
    // };

        // const sym= showdropdown ? "fa-caret-up": "fa-caret-down";
        // const login_flag=true;
    //     const el= login_flag ? <Nav.Link >
    //     <div className="d-flex flex-row align-items-center justify-content-center pl-3">
    //       <h4 className="navbar_username">Anshika</h4>
    //       <i className={"pl-1 fa " + sym} onClick={handlearrowclick}></i>
    //       {showdropdown && <div className="navbar_mydropdown">
    //          <h3 className="dropdown_text" >logout</h3>
    //       </div>}
    //      </div>  
    //   </Nav.Link> :<div></div>
        return (
           <div>
               <Navbar expand="lg" className="navbar nav_wrapper">
                <Navbar.Brand>
                  <img src={navicon} className="nav_icon"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="w-100 justify-content-end">
                   
                    
                        <Nav.Link className="d-flex flex-row nav_link" >
                            <img src={db} className="nav_img"/>
                            <h3 className="nav_text">DASHBOARD</h3></Nav.Link>
                        <Nav.Link className="d-flex flex-row nav_link" >
                            <img src={company} className="nav_img"/>
                            <h3 className="nav_text">COMPANY</h3></Nav.Link>
                        <Nav.Link className="d-flex flex-row nav_link" >
                            <img src={project} className="nav_img"/>
                            <h3 className="nav_text">MY PROJECTS
                            
                            </h3><img src={arrow} className="dropdown_arrow"></img></Nav.Link>
                        <Nav.Link className="d-flex flex-row nav_link" >
                            <img src={report} className="nav_img"/>
                            <h3 className="nav_text">MY REPORTS</h3></Nav.Link>
                        <Nav.Link className="d-flex flex-row nav_link" >
                            <img src={help} className="nav_img"/>
                            <h3 className="nav_text">HELP</h3></Nav.Link>
                   
                    <div className="d-flex flex-row profile-wrapper">
                        <Nav.Link className="d-flex flex-row nav_link" >
                            <img src={bell} className="nav_img" />
                        </Nav.Link>
                        <Nav.Link className="d-flex flex-row nav_link" >
                            <img src={profile} className="profile-img" />
                            <div className="d-flex flex-column profile-container">
                                 <span className="profile-text">Naman Patel</span>
                                 <span className="profile-description">Super User</span>   
                            </div>  
                            <img src={arrow} className="dropdown_arrow"></img>
                        </Nav.Link>
                    </div>
                    
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
           </div>
        )
    }
    export default MyNavbar;
