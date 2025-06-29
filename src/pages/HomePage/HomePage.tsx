import GlobalFooter from '../../components/GlobalFooter/GlobalFooter';
import GlobalHeader from '../../components/GlobalHeader/GlobalHeader';
import BannerBottom from './components/BannerBottom';
import BannerTop from './components/BannerTop';
import IntroSection from './components/IntroSection';

const HomePage = () => {
  return (
    <div>
      <GlobalHeader />
      <BannerTop />
      <IntroSection />
      <BannerBottom />
      <GlobalFooter />
    </div>
  );
};

export default HomePage;
