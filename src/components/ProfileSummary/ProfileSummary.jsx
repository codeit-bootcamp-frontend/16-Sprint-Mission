/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import avatarImg from "@/assets/images/img-avatar.png";
import formatDate from "@/utils/formatDate";

const ProfileSummary = ({ name, imgSrc, createdAt, ...props }) => {
  return (
    <div
      className="profile-area"
      css={ProfileSummaryStyle}
      size={props.size}
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
          width={props.size}
          height={props.size}
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

const ProfileSummaryStyle = css`
  display: flex;

  .profile {
    display: flex;
    gap: 16px;

    img {
      flex-shrink: 0;
    }

    .info .name {
      display: block;
      margin-bottom: 2px;
      color: var(--text-primary);
      font-size: 14px;
    }

    .info .createdAt {
      color: var(--gray400);
      font-size: 14px;
    }
  }
`;
