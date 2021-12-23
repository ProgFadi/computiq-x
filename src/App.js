import { Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Scoreboard from "./components/Scoreboard";
import Taskboard from "./components/Taskboard";
import theme from "./theme"
const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Navbar />
      <Grid container>
        <Grid item sm={7}>
          <Taskboard />
        </Grid>
        <Grid item sm={4}>
          <Scoreboard />
        </Grid>
      </Grid>
      </ThemeProvider>
    </div>
  );
};

export default App;













// import "./App.css";
// import routes, { renderRoutes } from './routes';
// import {Router} from 'react-router-dom'
// import {AuthProvider} from './contexts/AuthContext'
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();

// function App() {
//   return (
//     <Router history={history}>
//       <AuthProvider>
//         {renderRoutes(routes)}
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;
