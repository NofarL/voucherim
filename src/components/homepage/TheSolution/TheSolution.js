import React from 'react';
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
import Section from '../../../components/Section/Section';
import './TheSolution.scss';

const TheSolution = () => {
  return (
    <Section className="the-solution">
      <div className="problems">
        <Fade right>
          <div className="problem paid">
            <h4>הבעיה עם <em>קידום ממומן</em> היא</h4>
            <h3>שאתם משלמים על הקידום גם כשהוא <em>לא עובד</em></h3>
          </div>
        </Fade>

        <Fade left>
          <div className="problem portals">
            <h4>הבעיה עם <em>פורטלים ואתרי שוברים</em> היא</h4>
            <h3>שהם מתפרנסים מה<em>עמלות</em> שהם גובים מכם</h3>
          </div>
        </Fade>
      </div>

      <div className="header">
        <Swing>
          <h4><em>אתם עובדים קשה כדי לספק את המוצר או השירות. לא מגיע לכם יותר?</em></h4>
        </Swing>

        <Fade>
          <h2>הפתרון שאנחנו מציעים הוא <em>בדיוק מה שחיפשתם.</em></h2>
        </Fade>
      </div>
    </Section>
  );
}

export default TheSolution;