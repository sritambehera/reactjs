import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import MainContent from './MainContent';
import Joke from './Joke';
import JokesData from './JokesData';



function App() {
	const JokesComponents = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)


  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      
        <img src={logo} className="App-logo" alt="logo" />
        {JokesComponents}
      </div>

  );
}

export default App;
