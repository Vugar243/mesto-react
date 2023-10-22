import React, { useEffect, useState } from 'react';

function FormValidator({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
  const [inputList, setInputList] = useState([]);
  const [buttonElement, setButtonElement] = useState(null);

  useEffect(() => {
    const formElement = document.querySelector(formSelector);
    setInputList(Array.from(formElement.querySelectorAll(inputSelector)));
    setButtonElement(formElement.querySelector(submitButtonSelector));
  }, [formSelector, inputSelector, submitButtonSelector]);
  

  const showInputError = (inputElement, errorMessage) => {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

  const hideInputError = (inputElement) => {
    const errorElement = inputElement.nextElementSibling;
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  };

  const checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(inputElement, inputElement.validationMessage);
    } else {
      hideInputError(inputElement);
    }
  };

  const toggleButtonState = () => {
    const isValid = inputList.every((inputElement) => inputElement.validity.valid);
    if (isValid) {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    } else {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', '');
    }
  };

  const setEventListeners = () => {
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(inputElement);
        toggleButtonState();
      });
    });
  };

  useEffect(() => {
    setEventListeners();
    toggleButtonState();
  }, [inputList, buttonElement]);

  return null;
}

export default FormValidator;

