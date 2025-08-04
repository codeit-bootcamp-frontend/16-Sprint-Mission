import UserProfile, {
  UserProfileStyleProps,
} from "@pages/ProductDetailPage/components/UserProfile/UserProfile";
import { getRelativeTime } from "@utils/getRelativeTime";
import { InquiryItemType } from "types/productType";

type Props = Pick<InquiryItemType, "writer" | "updatedAt"> &
  UserProfileStyleProps;

const InquiryUserProfile = ({ writer, updatedAt }: Props) => {
  const date = getRelativeTime(updatedAt);

  return <UserProfile ownerNickname={writer.nickname} date={date} size="sm" />;
};

export default InquiryUserProfile;
