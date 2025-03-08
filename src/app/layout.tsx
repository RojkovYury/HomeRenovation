"use client"

import { ReactNode, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Fab, Paper, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <html lang="ru">
      <body style={{ margin: 0, backgroundColor: isDarkMode ? '#14181B' : '#FAFBFB' }}>
        <ThemeProvider theme={theme}>
          <Paper
            elevation={1}
            sx={{
              width: '100%',
              height: '50px',
              bgcolor: isDarkMode ? '#1E1E1E' : '#ffffff',
              mb: { xs: '8px', sm: '0px', md: '0px' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: '600px', sm: '600px', md: '1184px' },
                width: '100%',
                mx: '8px',
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
              }}
            >
              <Fab sx={{ height: '26px', minHeight: '26px', width: '26px' }} color="info">
                <DarkModeIcon sx={{ fontSize: '20px' }}  />
              </Fab>
              <Switch checked={isDarkMode} onChange={toggleTheme} color="info"/>
            </Box>
          </Paper>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
