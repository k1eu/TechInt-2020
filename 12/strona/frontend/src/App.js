import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Client from './ClientCorse'
import ClientNoCorse from './ClientNoCorse';
import ClientCorse from './ClientCorse';


function App() {
  return (
    <div>
    <ClientNoCorse></ClientNoCorse>
    <ClientCorse></ClientCorse>
    </div>)
}

export default App;
