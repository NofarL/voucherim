import React from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../../../components/Section/Section';
import graph from '../../../assets/icons/graph.svg';
import handshake from '../../../assets/icons/handshake.svg';
import reviews from '../../../assets/icons/reviews.svg';
import './EverybodyWins.scss';

const EverybodyWins = () => {
  const items = [
    {
      icon: graph,
      title: 'רווח נקי מהשוברים',
      text: 'רק אתם קובעים את ההטבה שאתם רוצים להציע ללקוח, אף אחד לא יחליט בשבילכם או יגבה מכם אחוזים, והלקוח משלם ישירות לכם - רווח נקי!'
    },
    {
      icon: handshake,
      title: 'משתלם לשתף פעולה',
      text: 'כשאתם עוזרים לעסקים אחרים אתם יוצרים קשרים טובים, מרוויחים את העמלה עבור שיווק השובר, וזוכים לתודה של הלקוח שלכם על ההמלצה.'
    },
    {
      icon: reviews,
      title: 'לקוחות מרוצים',
      text: 'שירות טוב מביא לקוחות נאמנים. כשהלקוח מעריך את העזרה שלכם ויוצא בחיוך, אין ספק שהוא ישוב אליכם גם בפעם הבאה, וימליץ עליכם לאחרים.'
    }
  ];

  return (
    <Section className="everybody-wins">
      <Fade>
        <h2>כשעסקים משתפים פעולה - כולם מרוויחים!</h2>
      </Fade>
      <div className="items">

        {items.map(({ icon, title, text }, key) => (
          <div key={key} className="item">
            <Fade >
              <img alt={title} src={icon} />
            </Fade>
            <Fade top>
              <h4>{title}</h4>
            </Fade>
            <Fade bottom>
              <p>{text}</p>
            </Fade>
          </div>
        ))}

      </div>
    </Section>
  );
}

export default EverybodyWins;