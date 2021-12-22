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
  );
}

export default App;
