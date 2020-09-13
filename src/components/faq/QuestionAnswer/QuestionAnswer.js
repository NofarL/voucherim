import React from 'react';
import './QuestionAnswer.scss';

const QuestionAnswer = ({ question, answer }) => {
  // Strips all HTML tags from a given string, except for the allowed tags.
  const stripTags = (input, allowed) => {
    allowed = (((allowed || '') + '')
      .toLowerCase()
      .match(/<[a-z][a-z0-9]*>/g) || [])
      .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)

    let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;

    return input.replace(tags, function ($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
  }

  return (
    <section>
      <div className="q">ש</div>
      <div className="question">
        {question}
      </div>
      <div className="a">ת</div>
      <div className="answer">
        {answer.map((p, i) =>
          <p key={i} dangerouslySetInnerHTML={{ __html: stripTags(p, '<a>') }} />
        )}
      </div>
    </section>
  );
}

export default QuestionAnswer;