interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle = ({ title, className }: SectionTitleProps) => {
  return (
    <h4 className={`${className} w-auto mb-4 mr-auto text-[20px] font-bold`}>
      {title}
    </h4>
  );
};

export default SectionTitle;
