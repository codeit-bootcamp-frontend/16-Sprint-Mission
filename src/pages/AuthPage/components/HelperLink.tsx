import { Link } from 'react-router-dom';

const HelperLink = ({
  message,
  linkText,
  linkUrl,
}: {
  message: string;
  linkText: string;
  linkUrl: string;
}) => {
  return (
    <span className='font-pretendard font-medium text-[14px]/[24px] mx-auto'>
      {message}{' '}
      <Link to={linkUrl} className='underline text-brand-blue'>
        {linkText}
      </Link>
    </span>
  );
};

export default HelperLink;
