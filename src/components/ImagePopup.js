import React from 'react';

function ImagePopup({ selectedCard: Card, onClose }) {
  return (
    <div className={`popup popup-image ${Card ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button popup__image-close-button" onClick={onClose}></button>
        <img className="popup__image-image" src={Card ? Card.link : ''} alt={Card ? Card.name : ''} />
        <h2 className="popup__image-title">{Card ? Card.name : ''}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;