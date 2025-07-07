import { useState } from 'react';
import defaultImg from '../../assets/img/noimg.jpg'
import ProfileCard from '../ProfileCard/ProfileCard'
import Tags from '../Tags.jsx/Tags'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import styles from './ProductDetail.module.css'
import EditDropDown from '../DropDown/EditDropDown';

export default function ProductDetail({info}) {
  const { name,
    images,
    price,
    description,
    tags,
    ownerNickname,
    createdAt,
    favoriteCount, } = info
    const [addLike, setaddLike] = useState(false)

    const handleLike = () => {
      setaddLike((prev) => !prev)
    }
  return (
    <div className={styles.container}>
      <img className={styles.img} src={images ? images : defaultImg} alt="제품 이미지" />
      <div className={styles.description_container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h3>{name}</h3>
            <EditDropDown />
          </div>
          <p className={styles.price}
          >{price.toLocaleString("ko-KR")}원</p>
        </div>
        <div className={styles.description}>
          <h6 className={styles.description_title}>상품 소개</h6>
          <p>{description}</p>
        </div>
        <div className={styles.tags}>
          <h6 className={styles.tags_title}>상품 태그</h6>
          <Tags tags={tags}/>
        </div>
        <div className={styles.profile}>
          <ProfileCard ownerNickname={ownerNickname} createdAt={createdAt}/>
          <div className={styles.line}></div>
          <div onClick={handleLike} className={addLike ? styles.liked : styles.like}>
            {addLike ? <FaHeart /> : <FaRegHeart />}{addLike ? favoriteCount + 1 : favoriteCount}
            </div>
        </div>
      </div>
    </div>
  )
}