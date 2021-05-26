import React from 'react';
import './style/App.css';

import GithubCorner from 'react-github-corner'
import Form from './Components/Form'
import Post from './Components/Post'
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <GithubCorner href='https://github.com/CIKM-2021/hive-db' direction='left'/>
      {/* <Header /> */}
      {/* <Form /> */}
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
