import './Testimonial-item.css';

import { ReactComponent as StarSelected } from '../../assets/img/svg/star-selected.svg';
import { ReactComponent as StarNotSelected } from '../../assets/img/svg/star-not-selected.svg';

import logo1 from '../../assets/img/png/logo-1.png';
import logo2 from '../../assets/img/png/logo-2.png';
import logo3 from '../../assets/img/png/logo-3.png';
import logo4 from '../../assets/img/png/logo-4.png';

const TestimonialItem = ({ testimonial }) => {
  const renderImageSwitch = (param) => {
    switch (param) {
      case 'logo-1.png':
        return logo1;
      case 'logo-2.png':
        return logo2;
      case 'logo-3.png':
        return logo3;
      case 'logo-4.png':
        return logo4;
      default:
        return logo1;
    }
  };

  const renderStarSelected = (param) => {
    return Math.floor(param);
  };

  const renderStarNotSelected = (param) => {
    return 5 - Math.floor(param);
  };

  let selectedStars = [];
  for (let i = 0; i < renderStarSelected(testimonial.rating); i++) {
    selectedStars.push(<StarSelected key={i} />);
  }

  let notSelectedStars = [];
  for (let i = 0; i < renderStarNotSelected(testimonial.rating); i++) {
    notSelectedStars.push(<StarNotSelected key={i} />);
  }

  return (
    <div className="card">
      <div className="card-header">
        <img
          className="card-header-img"
          src={renderImageSwitch(testimonial.headerImg)}
          alt={testimonial.headerImgAlt}
        ></img>
        <div>
          <div className="card-header-title">{testimonial.headerTitle}</div>
          <div className="card-header-subTitle">
            {testimonial.headerSubTitle},{testimonial.headerThirdItem}
          </div>
        </div>
      </div>
      <hr />
      <div className="card-body">
        <div className="card-rating">
          {selectedStars}
          {notSelectedStars}
          {testimonial.rating}
        </div>
        <div className="card-body-title">{testimonial.title}</div>
        <p className="card-body-paragraph">{testimonial.content}</p>
      </div>
      <hr />
      <div className="card-footer">
        <img
          className="card-footer-img"
          src={testimonial.footerImg}
          alt={testimonial.footerImgAlt}
        ></img>
        <div className="card-footer-username">User#{testimonial.username}</div>
      </div>
    </div>
  );
};

export default TestimonialItem;
