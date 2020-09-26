import React from 'react';

import AuthContext from './context/AuthContext';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Lucas' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyles />
  </>
);

export default App;
