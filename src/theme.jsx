import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
        background: {
            default: grey[100],
            paper: grey[100],
          },
        primary:{
            main: grey[100],

        },
    },
    myButton: {
        backgroundColor: "red",
        color: "white",
        border: "1px solid black",
    },
    typography: {
        fontFamily: [
          'MetropolisMedium',
        ],
     },
});
export default theme;