import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef(null);
  function handleUpdateAvatar(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value, // Получение значения инпута с помощью рефа
    });
  }
  return (
    <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleUpdateAvatar}
      >
        <input id="avatar-link-input" className="popup__input popup__input_type_link" type="url" name="avatar" placeholder="Ссылка на аватар" required ref={avatarRef}/>
        <span className="popup__input-error avatar-link-input-error"></span>      
      </PopupWithForm>
  );
}

export default EditAvatarPopup;