import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WalletProvider } from './context/WalletContext';
import { ScoreProvider } from './context/ScoreContext';
import HomePage from './pages/HomePage';
// Другие импорты страниц, если они есть

function App() {
  return (
    <Router>
      <WalletProvider>
        <ScoreProvider>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {/* Другие маршруты, если они нужны */}
          </Switch>
        </ScoreProvider>
      </WalletProvider>
    </Router>
  );
}

export default App;
