import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';


function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const nameRef = useRef();
  const linkRef = useRef();

  function handleAddPlace(e) {
    e.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }
  return (
    <PopupWithForm
        name="adding-card"
        title="Новое место"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleAddPlace}
      >
        <input id="photo-input" className="popup__input popup__input_type_title" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required ref={nameRef} />
        <span className="popup__input-error photo-input-error"></span>
        <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required ref={linkRef} />
        <span className="popup__input-error link-input-error"></span>
      </PopupWithForm>
  );
}

export default AddPlacePopup;