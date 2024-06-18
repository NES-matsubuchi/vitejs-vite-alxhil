import { React, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { Auth } from 'aws-amplify';

// import { intervalID, clearIntervalID } from './GetIdToken.jsx';

const theme = createTheme({
  typography: {
    fontFamily: 'noto-sans',
  },
});

export const Header = () => {
  const [username, setUsername] = useState();

  // Auth.currentAuthenticatedUser().then((data) => {
  //   setUsername(data.username);
  // });

  async function signOut() {
    console.log();
    // try {
    //   await Auth.signOut();
    //   if (intervalID) {
    //     console.log('clear interval:', intervalID, typeof intervalID);
    //     clearInterval(intervalID);
    //     clearIntervalID();
    //     console.log('clear intervalID:', intervalID);
    //   }
    // } catch (error) {
    //   console.log('error signing out: ', error);
    // }
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar position="fixed" sx={{ backgroundColor: '#04127c' }}>
        <Toolbar color="inherit">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a class="HeaderTitle" href="/">
              NEC Supply Chain Security Management for Network
            </a>
          </Typography>
          <Typography
            class="HeaderUser"
            variant="h8"
            component="div"
            sx={{ flexGrow: 0.05 }}
          >
            {username}
          </Typography>
          <ThemeProvider theme={theme}>
            <Button color="inherit" onClick={signOut}>
              サインアウト
            </Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
