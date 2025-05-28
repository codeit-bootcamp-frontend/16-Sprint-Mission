import style from './SkeletonCard.module.scss';
function SkeletonCard() {
  return (
    <div className={style['skeleton-card']}>
      <div className={style['skeleton-card__image']}></div>
      <div className={style['skeleton-card__info']}>
        <div className={style['skeleton-card__name']}></div>
        <div className={style['skeleton-card__price']}></div>
        <div className={style['skeleton-card__like']}></div>
      </div>
    </div>
  );
}
export default SkeletonCard;
