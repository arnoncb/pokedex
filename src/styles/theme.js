import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#DF4760",
    },
    secondary: {
      main: "#3498DB",
    },
  },
  // colors: {
  //   primaryRed: "#DF4760",
  //   secondaryRed: "#F24D67",
  //   dark: "#585858",
  //   blue: "#3498DB",
  //   green: "#2ECC71",
  //   yellow: "#F1C40F",
  //   orange: "#E67E22",
  //   gray: "#BDC3C7",
  //   pink: "#EFA3B0",
  // },
  spacing: 4,
  zIndex: {
    drawer: 1000,
  },
})

export default theme
