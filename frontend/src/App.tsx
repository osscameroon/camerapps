import React from 'react';
import './App.css';
import MainUI from "./modules/main";
import ScrollToTop from "./common/scroll-top";

function App() {
  return (
    <div className="App" id={"app"}>
      <MainUI />
        <ScrollToTop />
    </div>
  );
}

export default App;
