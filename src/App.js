<<<<<<< HEAD
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
=======
import "./App.css";
import routes, { renderRoutes } from "./routes";
import { Router } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { createBrowserHistory } from "history";
import { createTheme } from "./theme";
import { create } from "jss";
import rtl from "jss-rtl";
import { useContext } from "react";
import { jssPreset, StylesProvider, ThemeProvider } from "@material-ui/core";
import SettingsContext from './contexts/SettingsContext'
const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  const { settings } = useContext(SettingsContext);
  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });
  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Router history={history}>
          <AuthProvider>{renderRoutes(routes)}</AuthProvider>
        </Router>
      </StylesProvider>
    </ThemeProvider>
>>>>>>> 9188ca109c1b21238e001d11cd901d6e91cdedc3
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
