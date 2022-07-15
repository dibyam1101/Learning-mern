import React from "react";
import { Container, AppBar, Typography, Grow, Grid, Toolbar } from '@material-ui/core';


function App() {
  return (
    <Container maxWidth = "lg">
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h2" align = "center">
          Memories
        </Typography>
      </Toolbar>
    </AppBar>

    </Container>
  );
}

export default App;
