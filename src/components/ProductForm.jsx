import "./ProductForm.css";
import { useState } from "react";
import likes_fill from "../assets/favorite_fill.png";
import likes_empty from "../assets/favorite_empty.png";

const ProductForm = ({ item, type }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(item.favoriteCount);
  const handleLikeClick = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const number = item.price;
  const formattedNumber = number.toLocaleString();

  return (
    <div className="product_form_wrapper">
      {type==='all'?<img className="product_form_img_all" src={item.images} />:<img className="product_form_img" src={item.images} />}
      
      <div className="product_form_name">{item.name}</div>
      <div className="product_form_price">{formattedNumber}원</div>
      <div className="product_form_like" onClick={handleLikeClick}>
        <img src={liked ? likes_fill : likes_empty} alt="like button" />
        <span>{likes}</span>
      </div>
    </div>
  );
};
export default ProductForm;
