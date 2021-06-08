import React from 'react';
import Form from './components/form/Form';
import UsersList from './components/users-list/UsersList.jsx';
import GlobalStyle from './styles/GlobalStyle'; 
import './styles/app.css';

const App = () => {
  return (
    <div className="App">
      <Form />
      <UsersList />
      <GlobalStyle />
    </div>
    
  );
}

export default App;
