import React from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../../../components/Section/Section';
import shop1 from '../../../assets/images/animations/shop1.svg';
import shop2 from '../../../assets/images/animations/shop2.svg';
import shop3 from '../../../assets/images/animations/shop3.svg';
import v from '../../../assets/images/animations/v.svg';
import './ShopsAnimation.scss';

const ShopsAnimation = () => {
  return (
    <Section className="shops-animation">
      <Fade>
        <div>
          <img alt="shop shop1" className="shop shop1" src={shop1} />
          <img alt="shop shop2" className="shop shop2" src={shop2} />
          <img alt="shop shop3" className="shop shop3" src={shop3} />
          <img alt="person person2" className="person person2" src={v} />
          <img alt="person person3" className="person person3" src={v} />
          <img alt="person person4" className="person person4" src={v} />
          <img alt="person person5" className="person person5" src={v} />
          <img alt="person person6" className="person person6" src={v} />
          <img alt="person person7" className="person person7" src={v} />

          <div className="money money1">$$$</div>
          <div className="money money2">$$$</div>
          <div className="money money3">$$$</div>
        </div>
      </Fade>
    </Section>
  );
}

export default ShopsAnimation;