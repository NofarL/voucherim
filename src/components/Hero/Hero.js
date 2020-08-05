import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import ScrollToAnchor from '../ScrollToAnchor/ScrollToAnchor';
import './Hero.scss';

const Hero = () => {
  return (
    <Fragment>
      <section id="hero">
        <div className="overlay">
          <div>
            <Fade top>
              <div className="h2h3">
                <h2>שיתופי פעולה</h2>
                <h3>להגדלת מעגל הלקוחות</h3>
              </div>
            </Fade>
            <Fade right>
              <YoutubeEmbed code="-HTAoyMMy5o" title="למה כדאי לשתף פעולה" className="youtube" />
            </Fade>
            <div className="welcome">
              <Fade top>
                <h2>שיתופי פעולה</h2>
                <h3>להגדלת מעגל הלקוחות</h3>
              </Fade>
              <Fade bottom>
                <p>
                  המשימה שלנו היא לפתוח אפיקי פרסום חדשים לעסקים קטנים, על ידי מתן מערכת שוברים ידידותית למשתמש, עם כלים מעשיים להגדלת ההכנסות ולצמצום משמעותי של הוצאות שיווק.
                </p>
              </Fade>
              <Fade>
                <div className="actions">
                  <ScrollToAnchor anchorSelector="#learnAnchor" className="learn">רוצה לדעת עוד?</ScrollToAnchor>
                  <a href="https://voucherim.com/v/v.dll/v/clubhouse/signup?lang=2&dst=DST.000B3FCE.00008224.0064"
                    className="start">התחל עכשיו</a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div id="learnAnchor"></div>
      </section>
      <section className="video">
        <Fade>
          <YoutubeEmbed code="-HTAoyMMy5o" title="Voucherim" className="youtube" />
        </Fade>
      </section>
    </Fragment>
  );
}

export default Hero;