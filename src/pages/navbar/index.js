import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom"


export default function NavbarMenu() {

    // const [t, i18n] = useTranslation('common');

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        // debugger;
        setIsOpen(prev => !prev);
    };

    return (
        <div>
            <Navbar
                light
                expand="lg"
            // fixed="top"
            >
                <div class="main-container">
                    <Link to="/" className="navbar-brand" >
                        <img data-aos="fade-right" data-aos-duration="2000" src="/assets/img/logo-if.jpg" alt="logo" className="logo_img" />
                    </Link>
                    <NavbarToggler onClick={toggle} />
                    <Collapse className="menu_list" navbar isOpen={isOpen}>
                        <Nav data-aos="fade-right" data-aos-duration="2000" navbar>
                            <NavItem>
                                <Link to="/portfolio">portfolio</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="menu-link" to="/xizmatlar">xizmatlar</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="menu-link" to="/blog">blog</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="menu-link" to="/aloqa">a'loqa</Link>
                            </NavItem>
                        </Nav>
                        <div data-aos="fade-right" data-aos-duration="2000" className="nav_contact">
                            <div className="nav_contact__call">
                                <img src="/assets/img/call.svg" />
                                <p>
                                    +998 (99) 994-31-11
                                </p>
                            </div>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                    O'z
                                </DropdownToggle>
                                <DropdownMenu center>
                                    <DropdownItem>
                                        Ru
                                    </DropdownItem>
                                    <DropdownItem>
                                        En
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    );
}