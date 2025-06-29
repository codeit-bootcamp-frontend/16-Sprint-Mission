interface Props {
  link: string;
  imgUrl: string;
}

const SocialIcon = ({ link, imgUrl }: Props) => {
  return (
    <a href={link} target='_blank' rel='noopener noreferrer' className='ursor-pointer'>
      <img className='aspect-square size-[20px]' src={imgUrl} width={18} />
    </a>
  );
};

export default SocialIcon;
