import React from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../../../components/Section/Section';
import coupons from '../../../assets/icons/coupons.svg';
import graph from '../../../assets/icons/graph.svg';
import wage from '../../../assets/icons/wage.svg';
import support from '../../../assets/icons/support.svg';
import './Benefits.scss';

const Benefits = () => {
  const items = [
    {
      icon: coupons,
      title: 'שוברים לכל מטרה',
      text: 'כל התנאים וההטבות של השוברים הם בשליטה הבלעדית של בית העסק'
    },
    {
      icon: graph,
      title: 'סטטיסטיקות ודוחות',
      text: 'כדי שתמיד תוכלו לעקוב אחר הפעילות השיווקית של העסק ויעילותה בזמן אמת'
    },
    {
      icon: wage,
      title: 'הכנסה נוספת',
      text: 'מהיום, כשתמליצו ללקוחות על עסקים אחרים תרוויחו "עמלת תודה" על ההמלצה הזו'
    },
    {
      icon: support,
      title: 'תמיכה וקהילה',
      text: 'הדרכה בתפעול המערכת ולהפקת תועלת מירבית ממנה וקבוצת וואטסאפ ייעודית לבעלי עסקים'
    }
  ];

  return (
    <Section className="benefits" bg="grey">

      {items.map(({ icon, title, text }, key) => (
        <div key={key} className="item">
          <div className="img">
            <Fade>
              <img alt={title} src={icon} />
            </Fade>
          </div>
          <Fade top>
            <h3>{title}</h3>
          </Fade>
          <Fade bottom>
            <p>{text}</p>
          </Fade>
        </div>
      ))}

    </Section>
  );
}

export default Benefits;