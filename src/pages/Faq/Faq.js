import React, { useState } from 'react';
import QuestionAnswer from '../../components/faq/QuestionAnswer/QuestionAnswer';
import Search from '../../components/faq/Search/Search';
import './Faq.scss';
import { faq } from '../../data';

const Faq = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(faq);

  const searchHandler = event => {
    setSearch(event.target.value);
    setList(faq.filter(({ question, answer }) => {
      return event.target.value.split(' ').some(word => {
        return question.includes(word) || answer.some(p => p.includes(word));
      });
    }));
  }

  return (
    <main className="faq">
      <h1>שאלות נפוצות</h1>
      <p className="no-answer">
        השאלה שרציתם לשאול לא מופיעה כאן? <a
          href="https://voucherim.com/v/v.dll/v/clubhouse/contact?lang=2">צרו עמנו קשר</a> ואנו נענה לכם בהקדם.
          </p>

      <Search
        search={search}
        searchHandler={searchHandler}
      />

      {list.map(({ question, answer }, i) =>
        <QuestionAnswer
          key={i}
          question={question}
          answer={answer}
        />
      )}
    </main>
  );
}

export default Faq;