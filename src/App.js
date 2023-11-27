import logo from './logo.svg';
import './App.css';
import HeaderComponent from './HomeComponents/headerComponent';
import MainHomeComponent from './HomeComponents/mainComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainHomeComponent></MainHomeComponent>
    </div>
  );
}

export default App;
