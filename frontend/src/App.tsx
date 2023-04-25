import MainUI from "./modules/main";
import ScrollToTop from "./common/scroll-top";
import "./App.css";

const App = () => {
  return (
    <div className="App" id={"app"}>
      <MainUI />
      <ScrollToTop />
    </div>
  );
};

export default App;
