import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import routes from './routes';
import navs from './navs';
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
    NavbarText
  } from 'reactstrap';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return(
        <div>
        <Navbar color="light" light expand="md">
       
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
    {/*   
            {
               navs.map((route) => {
                return  <NavItem>
                <NavLink>
                  <Link to = {route.path}>
                   {route.title}
                  </Link>
                 </NavLink>
              </NavItem>

              })
            }
   */}      

     {/*Alttaki tüm kodlların hepsini yukarıda yorum satırına aldığımız kod parçasıyla yazabiliyoruz görünürlüklük açısından ikisinide yazdım  */}
              <NavItem>
                <NavLink>
                  <Link to = "/">
                      Anasayfa
                  </Link>
                 </NavLink>
              </NavItem>
             
              <NavItem>
                <NavLink>
                  <Link to = "/hakkinda">
                      Hakkında
                  </Link>
                 </NavLink>
              </NavItem>

              <NavItem>
                <NavLink>
                  <Link to = "/tur/golden-retriever">
                      Goldens
                  </Link>
                 </NavLink>
              </NavItem>
           
          </Nav>         
        </Collapse>
      </Navbar>
        </div>
    );
};

export default Header;