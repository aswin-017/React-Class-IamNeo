  import logo from './logo.svg';
  import './App.css';
  import Hello from './hello';

  function App() {
    return (
      <div className="App">
        <Hello value="Username"  placeholder ="Enter your username" type="text"/>
        <Hello value="Email ID" placeholder="Enter your email" type="email"/>
        <Hello value="Phone Number" placeholder="Enter your number" type="number"/>
        <Hello value="Password" placeholder="Password" type="password"/>
        <Hello value="Confirm-password" placeholder="Confirm-password" type="password"/>
        <Hello type="submit"/>
        

      </div>
    );
  }

  export default App;
