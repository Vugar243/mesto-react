import React from 'react';
function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }  
  return (
    <li className="element">
      <button className="element__delete"></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}  />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div>
          <button className="element__like-button" type="button"></button>
          <p className="element__likes-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card; 