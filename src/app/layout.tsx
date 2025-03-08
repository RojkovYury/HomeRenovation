"use client"

import { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const darkTheme = createTheme({ palette: { mode: 'dark' }});
// #14181B
// #FAFBFB

export default function RootLayout({ children }: { children: ReactNode}) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, backgroundColor: '#14181B' }}>
        <ThemeProvider theme={darkTheme}>
          <Box
            sx={{
              width: '100%',
              height: '50px',
              bgcolor: '#1E1E1E',
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
                border: '1px solid red',
              }}
            >
            </Box>
          </Box>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
