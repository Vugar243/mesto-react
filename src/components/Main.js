import React, { useState, useEffect } from 'react';
import api from '../utils/Api.js';
import Card from './Card';
function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  
  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((err) => {
        console.error('Ошибка при загрузке данных пользователя:', err);
      });
  }, []);
  useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log('Error fetching initial cards:', err);
      });
  }, []);  
  return (
  <main className="content">
    <section className="profile">
      <div className="profile-container">
        <img onClick={onEditAvatar} className="profile-container__avatar" src={userAvatar} alt="Profile Avatar" />
        <button className="profile-container__edit-button" type="button"></button>
        <div className="profile-info">
          <h1 className="profile-info__title">{userName}</h1>
          <p className="profile-info__subtitle">{userDescription}</p>
          <button onClick={onEditProfile} className="profile-info__edit-button" type="button"></button>
        </div>
      </div>
      <button onClick={onAddPlace} className="profile__add-button" type="button"></button>
    </section>
    <section className="section-elements">
    <ul className="elements">
    {cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={onCardClick} /> 
          ))}
    </ul>
    </section>
  </main>
  );
}

export default Main;