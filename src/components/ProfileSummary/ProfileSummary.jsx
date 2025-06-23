/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import avatarImg from "@/assets/images/img-avatar.png";
import formatDate from "@/utils/formatDate";

const ProfileSummary = ({
  name,
  imgSrc,
  createdAt,
  imgSize = 40,
  metaSize = 14,
  imgInfoGap = 16,
  ...props
}) => {
  return (
    <div
      className="profile-area"
      css={ProfileSummaryStyle({ metaSize, imgInfoGap })}
      style={props.style}
    >
      <div className="profile">
        <img
          src={imgSrc || avatarImg}
          alt="기본 프로필 이미지"
          // onLoad={ }
          onError={(e) => {
            e.target.onerror = null;
            e.currentTarget.src = avatarImg;
          }}
          width={imgSize}
          height={imgSize}
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

const ProfileSummaryStyle = ({ metaSize, imgInfoGap }) => css`
  display: flex;

  .profile {
    display: flex;
    gap: ${imgInfoGap}px;

    img {
      flex-shrink: 0;
    }

    .info .name {
      display: block;
      color: var(--text-primary);
      font-size: ${metaSize}px;
    }

    .info .createdAt {
      color: var(--gray400);
      font-size: ${metaSize}px;
    }
  }
`;
