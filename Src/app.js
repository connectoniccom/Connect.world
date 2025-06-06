import Header from '/Header';
import Counter from './Counter';
import UserList from './UserList';
import ContactForm from './ContactForm';
import ToggleMessage from './ToggleMessage';
import './app.css';

function App() {
  return (
    <div className="app">
    <header className="App-header">
    <image src="Favicon.jpg" />
     <p>
          GitHub Codespaces <span className="heart">♥️</span> connectonic
        </p>
      <Header />
      <Counter />
      <UserList />
      <ContactForm />
      <ToggleMessage />
    </div>
  );
}
export default App;
