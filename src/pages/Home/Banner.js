import './Banner.css';

import BannerImg from '../../assets/img/png/banner.png';
import Play from '../../assets/img/svg/play.svg';

const Banner = () => {
  return (
    <article className="body">
      <img src={BannerImg} alt="banner" className="picture" />
      <h1 className="title">Chercher les entreprises les plus responsable</h1>
      <h2 className="subTitle">
        Sautons le pas pour que chaque voix compte quand il s'agit de sauver ce
        que nous avons de plus précieux
      </h2>
      <div className="videoSection">
        <img src={Play} alt="play video" />
        <h2 className="videoTitile">LANCER LA VIDÉO</h2>
      </div>
    </article>
  );
};

export default Banner;
