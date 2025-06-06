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
    <p>
    <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

      <Header />
      <Counter />
      <UserList />
      <ContactForm />
      <ToggleMessage />
    </div>
  );
}
export default App;
