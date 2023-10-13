import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React, { useState } from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };  


  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="adding-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        /*onSubmit={  handleAddPlace }*/
      >
        {
          <>
            <input id="photo-input" className="popup__input popup__input_type_title" type="text" name="name" placeholder="Название" minLength="2" maxLength="30" required />
            <span className="popup__input-error photo-input-error"></span>
            <input id="link-input" className="popup__input popup__input_type_link" type="url" name="link" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error link-input-error"></span>
          </>
        }
      </PopupWithForm>
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        /*onSubmit={  handleUpdateUser }*/
      >
        {
          <>
            <input id="name-input" className="popup__input popup__input_type_name" type="text" name="name" placeholder="Введите имя" minLength="2" maxLength="40" required />
            <span className="popup__input-error name-input-error"></span>
            <input id="job-input" className="popup__input popup__input_type_description" type="text" name="about" placeholder="Введите род деятельности" minLength="2" maxLength="200" required />
            <span className="popup__input-error job-input-error"></span>
          </>
        }
      </PopupWithForm>
      <PopupWithForm
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        /*onSubmit={  handleUpdateAvatar }*/
      >
        {
          <>
            <input id="avatar-link-input" className="popup__input popup__input_type_link" type="url" name="avatar" placeholder="Ссылка на аватар" required />
            <span className="popup__input-error avatar-link-input-error"></span>
          </>
        }
      </PopupWithForm>
      <PopupWithForm
        name="card"
        title="Вы уверены?"
        /*isOpen={}*/
        /*onClose={}*/
        /*onSubmit={}*/
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;


