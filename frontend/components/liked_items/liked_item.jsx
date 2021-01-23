import React from "react"
import { Link} from "react-router-dom"



const LikedItem = (props) => { 

    const unlike = () => {
        // e.preventDefault();
        props.removeLikedItem(props.likedItem.liked_item_id)
    }
   if(!props.likedItem.photoUrls) return null
    return (
      <li className="liked-item-li">
        <p className="liked-item-category">{props.likedItem.category}</p>
        <h1 className="liked-item-name">{props.likedItem.name}</h1>
            <Link to={`/products/${props.likedItem.product_id}`}>
          <img
            className="liked-item-photo"
            src={props.likedItem.photoUrls[0]}
            alt=""
          />
        </Link>
        <p className="liked-item-description">{props.likedItem.description}</p>
        <button className="index-cart-button" onClick={unlike}>
          Remove
        </button>
        <hr className="seperator-liked" />
      </li>
    );
}



export default LikedItem