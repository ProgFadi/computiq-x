import "./App.css";
import routes, { renderRoutes } from './routes';
import {Router} from 'react-router-dom'
import {AuthProvider} from './contexts/AuthContext'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

function App() {

  return (

<Router history={history}>
      <AuthProvider>
        {renderRoutes(routes)}
      </AuthProvider>
    </Router>

    
  );
}

export default App;
