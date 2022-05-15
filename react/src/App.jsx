import 'normalize.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { MainRouter } from './MainRouter';

export const App = () => {
  return (
          <Router>
            <MainRouter />
          </Router>
  );
};

export default App;
