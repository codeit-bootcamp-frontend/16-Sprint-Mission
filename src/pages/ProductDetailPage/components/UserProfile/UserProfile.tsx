import userThumbnail from "@assets/images/icons/ic_user_thumbnail.svg";
import { UserProfileBox } from "@pages/ProductDetailPage/components/UserProfile/UserProfileStyle";

export interface UserProfileStyleProps {
  size?: "sm" | "md";
}
interface BaseProps {
  ownerNickname: string;
  date: string;
}
type Props = BaseProps & UserProfileStyleProps;

const UserProfile = ({ ownerNickname, date, size = "md" }: Props) => {
  return (
    <UserProfileBox size={size}>
      <figure className="thumbnail">
        <img src={userThumbnail} alt={`${ownerNickname}님의 프로필 사진`} />
      </figure>
      <div>
        <span className="username">{ownerNickname}</span>
        <span className="date">{date}</span>
      </div>
    </UserProfileBox>
  );
};

export default UserProfile;
