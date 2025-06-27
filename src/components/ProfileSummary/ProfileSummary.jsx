/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import avatarImg from "@/assets/images/img-avatar.png";
import formatDate from "@/utils/formatDate";
import ImageSkeleton from "@/components/ui/Skeletons/ImageSkeleton";
import styles from "./ProfileSummaryStylesMap";

const ProfileSummary = ({ name, imgSrc, createdAt, size = "md" }) => {
  return (
    <div className="profile-area" css={ProfileSummaryStyle(size)}>
      <div className="profile">
        <ImageSkeleton
          src={imgSrc || avatarImg}
          alt="기본 프로필 이미지"
          width={styles.imgSize[size]}
          height={styles.imgSize[size]}
        />
        <div className="info">
          <span className="name">{name}</span>
          <span className="createdAt">{formatDate(createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileSummary;

const getProfileSize = (size) => styles.size[size];

const ProfileSummaryStyle = (size) => css`
  display: flex;

  .profile {
    ${getProfileSize(size)};

    display: flex;

    img {
      flex-shrink: 0;
    }

    .info .name {
      display: block;
      color: var(--text-primary);
    }

    .info .createdAt {
      color: var(--gray400);
    }
  }
`;
