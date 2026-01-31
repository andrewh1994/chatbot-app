import React from 'react';
import { Header } from './components/Header';
import { Chat } from './components/Chat';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Chat />
    </div>
  );
}
