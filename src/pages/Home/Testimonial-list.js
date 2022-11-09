import './Testimonial-list.css';
import TestimonialItem from './Testimonial-item';

import { testimonials } from '../../data/Testimonials';

const TestimonialList = () => {
  return (
    <div className="testimonals">
      <h1 className="testimonals-title">Derniers avis déposés</h1>
      <h2 className="testimonals-subTitle">
        Derniers avis déposés par des utilisateurs inscrits sur la plateforme ou
        publiés en ligne suite à un audit RSE
      </h2>
      <div className="cards">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem testimonial={testimonial} key={index} />
        ))}
      </div>
      <div className="threeDot">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default TestimonialList;
