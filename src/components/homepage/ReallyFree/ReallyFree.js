import React from 'react';
import Fade from 'react-reveal/Fade';
import Section from '../../../components/Section/Section';
import './ReallyFree.scss';

const ReallyFree = () => {
  return (
    <Section className="really-free">
      <Fade bottom>
        <h2>וזה באמת בחינם?</h2>
      </Fade>
      <Fade>
        <h3>כן, זה באמת בחינם.</h3>
      </Fade>

      <Fade>
        <p>
          אנחנו לא נגבה מכם אפילו שקל אחד.
          </p>
        <p>
          עם זאת, כדי להגדיל את הסיכוי שבעלי עסקים אחרים יעשו מאמץ לשווק ללקוחות שלהם את השוברים שלכם,<br />
          אנו ממליצים בחום להגדיר "עמלת תודה", שאותה יקבלו בעלי עסקים אחרים שישלחו אליכם לקוחות.
          </p>
        <p>
          אבל אתם אלה שקובעים את גובה העמלה שאתם מוכנים לתת, ואתם יכולים גם לא להציע עמלה כלל.<br />
          זה העסק שלכם, והשוברים שלכם, ואתם אלה שמקבלים את ההחלטות.
          </p>
      </Fade>
    </Section>
  );
}

export default ReallyFree;