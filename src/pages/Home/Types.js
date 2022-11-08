import './Types.css';

import BgTypes from '../../assets/img/svg/bg-types.svg';
import Play from '../../assets/img/svg/play.svg';

const Types = () => {
  return (
    <div>
      <div className="types-boxes">
        <div className="types-box">
          <h1 className="types-title">PARTICULIERS</h1>
          <h2 className="types-subTitle">
            Contribuez à améliorer l'impact des entreprises
          </h2>
          <p className="types-paragraph">
            Ceux et celles qui se sentent concernés par les enjeux actuels et
            veulent contribuer à l’amélioration du bien-être, de l’environnement
            et des pratiques économiques peuvent s’inscrire gratuitement sur
            notre plateforme. Vous trouverez des entreprises avec lesquelles
            vous interagissez et vous pourrez les noter sur de multiples
            critères de développement durable
          </p>
          <a href="#" className="types-button">
            Inscription gratuite
          </a>
        </div>
        <div className="types-box">
          <h1 className="types-title">PROFESSIONNELS</h1>
          <h2 className="types-subTitle">
            Evaluez gratuitement votre RSE auprès de vos parties prenantes
          </h2>
          <p className="types-paragraph">
            Les principes de la norme ISO 26000 établissent la référence
            mondiale en matière de développement durable. Pourtant, ils sont
            impossibles à estimer sans le retour de ses parties prenantes. Nos
            solutions d’audits RSE pour toutes les tailles d’entreprises
            permettent d’évaluer la performance de ces critères
          </p>
          <a href="#" className="types-button">
            Je découvre les audits RSE
          </a>
        </div>
      </div>
      <div className="types-image">
        <img src={BgTypes} alt="bg-types"></img>
      </div>
    </div>
  );
};

export default Types;
