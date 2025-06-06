import Header from './components/Header';
import Counter from './components/Counter';
import UserList from './components/UserList';
import ContactForm from './components/ContactForm';
import ToggleMessage from './components/ToggleMessage';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Counter />
      <UserList />
      <ContactForm />
      <ToggleMessage />
    </div>
  );
}
export default App;
