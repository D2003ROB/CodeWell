import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { getById } from '@testing-library/dom';
import '@testing-library/jest-dom/extend-expect'

import Login from '../../User/Login.js'

let container = null;

test('Calls onLoginSuccess if login is successful', async () => {
  const fakeLoginResponse = {
    success: 1
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeLoginResponse)
    })
  );
  const mockOnLoginSuccess = jest.fn();


  const { container, getByText } = render(
    <Login onLoginSuccess={mockOnLoginSuccess}/>
  )

  const userInput = container.querySelector('#login_id');
  await userEvent.type(userInput, 'user');

  const passwordInput = container.querySelector('#login_password');
  await userEvent.type(passwordInput, 'password');

  await fireEvent.click(container.querySelector("#login-button"));

  await wait(() => expect(global.fetch).toHaveBeenCalled());
  await wait(() => expect(mockOnLoginSuccess).toHaveBeenCalled());

  global.fetch.mockRestore();
});

test('Does not call onLoginSuccess if login is successful', async () => {
  const fakeLoginResponse = {
    success: 0
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeLoginResponse)
    })
  );
  const mockOnLoginSuccess = jest.fn();


  const { container, getByText } = render(
    <Login onLoginSuccess={mockOnLoginSuccess}/>
  )

  const userInput = container.querySelector('#login_id');
  await userEvent.type(userInput, 'user');

  const passwordInput = container.querySelector('#login_password');
  await userEvent.type(passwordInput, 'password');

  await fireEvent.click(container.querySelector("#login-button"));

  await wait(() => expect(global.fetch).toHaveBeenCalled());
  await wait(() => expect(mockOnLoginSuccess).toHaveBeenCalledTimes(0));

  global.fetch.mockRestore();
});
