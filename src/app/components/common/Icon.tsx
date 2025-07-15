interface IconProps {
  id: string;
  size?: number | string;
}

function Icon(props: React.SVGProps<SVGSVGElement> & IconProps) {
  const { id, size = "100%", ...rest } = props; // 전달받은 tailwindcss, 정확히는 className을 rest로 가져옵니다.
  return (
    <svg width={size} height={size} {...rest}>
      <use href={`#${id}`} />
    </svg>
  );
}

export default Icon;
