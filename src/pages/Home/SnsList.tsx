import facebookIcon from '@assets/icon/ic_facebook.png';
import instaIcon from '@assets/icon/ic_instagram.png';
import twitterIcon from '@assets/icon/ic_twitter.png';
import youtubeIcon from '@assets/icon/ic_youtube.png';

const SNS_MAP = {
  youtube: {
    href: 'https://www.youtube.com/?hl=ko&gl=KR&app=desktop',
    dict: '유튜브',
    icon: youtubeIcon,
  },
  twitter: {
    href: 'https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoia28ifQ%3D%3D%22%7D',
    dict: 'x(구 트위터)',
    icon: twitterIcon,
  },
  facebook: {
    href: 'https://www.facebook.com/?locale=ko_KR',
    dict: '페이스북',
    icon: facebookIcon,
  },
  insta: {
    href: 'https://www.instagram.com/',
    dict: '인스타그램',
    icon: instaIcon,
  },
};

function SnsList() {
  return Object.values(SNS_MAP).map((sns) => (
    <li key={sns.dict}>
      <a
        rel="noopener noreferrer"
        aria-label={`${sns.dict}으로 이동`}
        target="_blank"
        href={sns.href}
      >
        <img src={sns.icon} alt={`${sns.dict} 아이콘`} />
      </a>
    </li>
  ));
}

export default SnsList;
