import React from 'react';
import PersonCard from '../../components/PersonCard/PersonCard';
import { about } from '../../data';
import './About.scss';

const About = () => {
  return (
    <main className="about">
      <h1>מי אנחנו</h1>

      <p>
        מערכת וואוצ'רים פותחה במטרה להחזיר את הכח בחזרה לעסקים הקטנים ולתת להם כלים להתמודד עם עולם השיווק הדיגיטלי אשר
        מתפתח ומשתנה כל הזמן.
          </p>
      <p>
        לאפשר לכל עסק בצורה קלה, פשוטה וללא עלות, להרחיב את אפיקי השיווק שלו, להגדיל את קהל לקוחותיו, להפחית את התלות
        באתרי קופונים חיצוניים ולחסוך אלפי שקלים בחודש על שיווק ופרסום.
          </p>
      <p>
        המטרה העיקרית שלנו היא לראות את העסקים הקטנים מצליחים ומשגשים ולעזור להם להתגבר על כל הקשיים שאנחנו חווים כבעלי
        עסקים בעצמנו.
          </p>
      <p>
        זו הסיבה שמערכת וואוצ'רים ניתנת לשימוש בחינם והיא תמשיך במתכונתה הנוכחית להישאר בחינם לנצח!
          </p>
      <p>
        אתם מוזמנים להירשם ולהתרשם בעצמכם :)
          </p>

      <section className="cards">
        {about.map((person, i) => (
          <PersonCard
            key={i}
            person={person}
          />
        ))}
      </section>
    </main>
  );
}

export default About;