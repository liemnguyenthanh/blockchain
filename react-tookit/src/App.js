import "./App.css";
import BodyApp from "./Views/BodyApp";
import HeaderApp from "./Views/HeaderApp";
import SideBar from "./Views/SideBar";

function App() {
  return (
        <div className="App">
          <HeaderApp/>
          <SideBar/>
          <BodyApp/>
        </div>
  );
}

export default App;
