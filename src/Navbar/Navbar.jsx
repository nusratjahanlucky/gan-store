 import "./Navbar.css"
 import PropTypes from 'prop-types';
 import { BsFillCartFill } from "react-icons/bs";
 
 const Navbar =({openModal,cart}) => {
  return (
     
      <nav className="navbar">
        <h1>Gun store</h1>
        <div className="cart-counter"
         onClick= {openModal} >
          <span>{cart.length}</span>
        <BsFillCartFill className="icon"/>
        </div>
      </nav>
   
  );
 };
 
 Navbar.propTypes = {
  handleAddToCart:PropTypes.func,
  cart:PropTypes.object.isRequired,
  openModal:PropTypes.object.isRequired
 };
 
 export default Navbar;