import React from 'react';

function ImagePopup({ selectedCard, onClose }) {
  return (
    <div className={`popup popup-image ${selectedCard ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose}></button>
        <img className="popup__image-image" src={selectedCard ? selectedCard.link : ''} alt={selectedCard ? selectedCard.name : ''} />
        <h2 className="popup__image-title">{selectedCard ? selectedCard.name : ''}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;