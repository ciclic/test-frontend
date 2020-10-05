import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
    palette: {
        primary: {
            // light: será calculada com base em palette.primary.main,
            main: '#00e1cd',
            // dark: será calculada com base em palette.primary.main,
            // contrastText: será calculada para contrastar com palette.primary.main
        },
    }
});