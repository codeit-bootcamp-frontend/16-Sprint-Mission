interface SnsLinkProps {
  href: string;
  logo: string;
  alt: string;
}

const SnsLink = ({ href, logo, alt }: SnsLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={alt} loading="lazy" />
    </a>
  );
};

export default SnsLink;
