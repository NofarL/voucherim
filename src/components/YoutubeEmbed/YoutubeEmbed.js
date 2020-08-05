import React from 'react';

const YoutubeEmbed = (props) => {
  const { code, title, ...otherProps } = props;
  return (
    <iframe src={`https://www.youtube.com/embed/${code}`} title={title} {...otherProps} frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  );
}

export default YoutubeEmbed;