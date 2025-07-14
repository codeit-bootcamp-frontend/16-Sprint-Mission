import santokki from "@/assets/fonts/HSSantokki/santokki";

interface BadgeProps {
  text: string;
  variant?: "todo" | "done";
}

const baseBadgeStyle = `${santokki.className} text-lg px-[28px] py-2 rounded-3xl`;

const Badge = ({ text, variant }: BadgeProps) => {
  const getVariantStyle = () => {
    switch (variant) {
      case "todo":
        return "bg-lime text-green";
      case "done":
        return "bg-green text-amber-300";
      default:
        return "bg-gray-200 text-gray-900";
    }
  };

  return (
    <span className={`${baseBadgeStyle} ${getVariantStyle()}`}>{text}</span>
  );
};

export default Badge;
