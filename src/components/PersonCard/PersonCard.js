import React from 'react';
import './PersonCard.scss';

const PersonCard = ({ person }) => {
  const { image, name, description } = person;
  return (
    <div className="person-card">
      <img alt={name} src={image} />
      <h3>{name}</h3>
      <p>
        {description}
      </p>
    </div>
  );
}

export default PersonCard;