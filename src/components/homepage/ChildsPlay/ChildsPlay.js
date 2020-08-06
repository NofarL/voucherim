import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Arrows from './Arrows/Arrows';
import Texts from './Texts/Texts';
import Section from '../../../components/Section/Section';
import shopOrange from '../../../assets/images/animations/shopOrange.svg';
import shopBlue from '../../../assets/images/animations/shopBlue.svg';
import couponOrange from '../../../assets/images/animations/couponOrange.svg';
import couponBlue from '../../../assets/images/animations/couponBlue.svg';
import person from '../../../assets/images/animations/person.svg';
import coin from '../../../assets/images/animations/coin.svg';
import coins from '../../../assets/images/animations/coins.svg';
import './ChildsPlay.scss';

const ChildsPlay = () => {
  const [state, setState] = useState({
    stage: 1
  });
  const { stage } = state;

  const nextStage = next => {
    if (stage + 1 === next || (stage === 5 && next === 2)) {
      setState({ stage: next });
    }
  }

  return (
    <Section className="childs-play" bg="grey">

      <Flip right>
        <h2>פשוט כמו משחק ילדים</h2>
      </Flip>
      <Fade bottom>
        <p>
          העקרון כל כך פשוט, שאפשר להדגים אותו באנימציה בת ארבעה שלבים.<br />
          שימו לב מה אין כאן - אין עמלה שאנחנו גובים מכם!
          </p>
      </Fade>

      <Fade>
        <div className="desktop-only">
          <div className={`stage stage${stage}`}>
            <Arrows />
            <Texts />
            <img alt="shop orange" className="shop orange" src={shopOrange} />
            <img alt="shop blue" className="shop blue" src={shopBlue} />
            <img alt="coupon orange" className="coupon orange" src={couponOrange} onClick={() => nextStage(2)} />
            <img alt="coupon blue" className="coupon blue" src={couponBlue} onClick={() => nextStage(4)} />
            <img alt="person" className="person" src={person} />

            <img alt="coins-multi" className="coins-multi" src={coins} onClick={() => nextStage(stage === 2 ? 3 : 5)} />
            <img alt="coin-single" className="coin-single" src={coin} />
          </div>
        </div>
      </Fade>

      <div className="mobile-only">
        <Fade>

          <div className="stage stage1">
            <p>1. הלקוח יוצא מהעסק הכחול עם שובר לעסק הכתום</p>
            <div className="frame frame1">
              <img alt="shop blue frame1" className="shop blue" src={require('../../../images/shopBlue-cropped.svg')} />
              <img alt="coupon orange frame1" className="coupon orange" src={require('../../../images/couponOrange-cropped.svg')} onClick={() => nextStage(2)} />
              <img alt="person frame1" className="person" src={require('../../../images/person.svg')} />
            </div>
          </div>

          <div className="stage stage2">
            <p>2. הלקוח מממש את השובר בעסק הכתום</p>
            <div className="frame frame2">
              <img alt="shop orange frame2" className="shop orange" src={require('../../../images/shopOrange-cropped.svg')} />
              <img alt="coupon orange frame2" className="coupon orange" src={require('../../../images/couponOrange-cropped.svg')} onClick={() => nextStage(2)} />
              <img alt="person frame2" className="person" src={require('../../../images/person.svg')} />
            </div>
          </div>

          <div className="stage stage3">
            <p>3. העסק הכתום נותן "עמלת תודה" לעסק הכחול</p>
            <div className="frame frame3">
              <img alt="shop orange frame3" className="shop orange" src={require('../../../images/shopOrange-cropped.svg')} />
              <img alt="shop blue frame3" className="shop blue" src={require('../../../images/shopBlue-cropped.svg')} />
              <img alt="coins-multi frame3" className="coins-multi" src={require('../../../images/coin-new-multi.svg')} onClick={() => nextStage(stage === 2 ? 3 : 5)} />
              <img alt="coin-single frame3" className="coin-single" src={require('../../../images/coin-new.svg')} />
            </div>
          </div>

          <div className="stage stage4">
            <p>4. הלקוח יוצא מהעסק הכתום עם שובר לעסק הכחול</p>
            <div className="frame frame4">
              <img alt="shop orange frame4" className="shop orange" src={require('../../../images/shopOrange-cropped.svg')} />
              <img alt="coupon blue frame4" className="coupon blue" src={require('../../../images/couponBlue-cropped.svg')} onClick={() => nextStage(4)} />
              <img alt="person frame4" className="person" src={require('../../../images/person.svg')} />
            </div>
          </div>

        </Fade>
      </div>

    </Section>
  );
}

export default ChildsPlay;