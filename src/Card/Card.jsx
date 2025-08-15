 import "./Card.css"
 import { BsFillCartFill } from "react-icons/bs";
 import PropTypes from 'prop-types';

const Card = ({gunData,handleAddToCart}) => {
    const {name,img,bullet,capacity,action,price,} = gunData;
    //console.log(gunData);
     
    return (
        <div className="card">
            <div className="image-container">
                <img src={img} alt="" /> 
            </div>
            <div className="gun-info">
            <h3>{name}</h3>
            <p>Bullet Type:{bullet}</p>
            <p>Capacity:{capacity}</p>
            <p>Action:{action}</p>
            </div>
            <div className="add-to-cart">
                <button onClick={ ()=>handleAddToCart(gunData)}> <BsFillCartFill className="icon"/> </button>
                <h1>${price}</h1>
            </div>
        </div>
    );
};
Card.propTypes = {
    gunData:PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func
   };

export default Card;