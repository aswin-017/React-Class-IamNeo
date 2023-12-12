import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Switch from './components/Switch';
function App() {
  const PersonalInfo={name:"Aswin",email:"aswin@gmail.com",number:"994944964"};
  return (
    <div className="App">
      {/* <Profile bio={PersonalInfo}/> */}
      <Switch/>
    </div>
  );
}

export default App;
