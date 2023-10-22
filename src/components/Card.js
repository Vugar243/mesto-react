import React, { useContext, useState } from 'react';
import CurrentUserContext from './contexts/CurrentUserContext';
function Card({ card, onCardClick, onCardLike, onCardDislike, onCardDelete, likesCount }) {
  const currentUser = useContext(CurrentUserContext);
  likesCount = card.likes.length;
  const [isLiked, setIsLiked] = useState(card.likes.some((like) => like._id === currentUser._id));

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeOrDislikeClick() {
    if (isLiked) {
      onCardDislike(card);
      setIsLiked(false);
    } else {
      onCardLike(card);
      setIsLiked(true);
    }
  }
  
  function handleDeleteClick() {
    onCardDelete(card);
    console.log(card)
  }
  return (
    <li className="element">
      <button className={`element__delete ${card.owner._id !== currentUser._id && 'element__delete_hidden'}`} type="button" onClick={handleDeleteClick}></button>
      <img className="element__image" src={card.link} alt={card.name} onClick={handleClick}  />
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div>
        <button className={`element__like-button ${isLiked ? 'element__like-button_active' : ''}`} type="button" onClick={handleLikeOrDislikeClick}></button>
          <p className="element__likes-count">{likesCount}</p>
        </div>
      </div>
    </li>
  );
}

export default Card; 