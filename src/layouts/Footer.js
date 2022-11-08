import './Footer.css';
import LogoFooter from '../assets/img/png/logo-footer.png';
import InIcon from '../assets/img/svg/in.svg';
import FBIcon from '../assets/img/svg/fb.svg';
import YTIcon from '../assets/img/svg/yt.svg';
import TwitterIcon from '../assets/img/svg/twiter.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="col-1">
        <img src={LogoFooter} alt="logo-footer"></img>
        <div className="footer-icons">
          <img src={InIcon} alt="in-icon"></img>
          <img src={TwitterIcon} alt="twiter-icon"></img>
          <img src={FBIcon} alt="fb-icon"></img>
          <img src={YTIcon} alt="yt-icon"></img>
        </div>
      </div>
      <div className="col-2">
        <h3 className="footer-category">Rate a company</h3>
        <a className="href-link" href="#">
          A propos de Rate A Company
        </a>
        <a className="href-link" href="#">
          Articles sur la RSE
        </a>
        <a className="href-link" href="#">
          Vidéos sur la RSE
        </a>
        <a className="href-link" href="#">
          Tarifs
        </a>
        <a className="href-link" href="#">
          Contact
        </a>
      </div>
      <div className="col-3">
        <h3 className="footer-category">Services PRO</h3>
        <a className="href-link" href="#">
          AUDIT RSE
        </a>
        <a className="href-link" href="#">
          Devenir PRO
        </a>
      </div>
      <div className="col-4">
        <h3 className="footer-category">Legal</h3>
        <a className="href-link" href="#">
          Mentions légales
        </a>
        <a className="href-link" href="#">
          Conditions d’utilisation
        </a>
        <a className="href-link" href="#">
          Plan du site
        </a>
      </div>
    </div>
  );
};
export default Footer;
