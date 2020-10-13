import { createMuiTheme } from '@material-ui/core'
import { blue, grey } from '@material-ui/core/colors'

// create a theme instance
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: blue[500],
      main: blue[700],
      dark: blue[800],
      contrastText: grey[100]
    }
  }
})

export default theme