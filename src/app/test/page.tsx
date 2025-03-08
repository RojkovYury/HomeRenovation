"use client"

import { Box } from "@mui/material";

export default function Test() {
  return (
    <Box
      sx={{
        // display: 'flex',
        flexDirection: 'row', // ! def?
        justifyContent: 'center',
        maxWidth: '1200px', // !
        // marginLeft: 'auto',
        // marginRight: 'auto',
        minHeight: '101vh ',
        mb: '60px',
        mt: '18px',
        bgcolor: 'white',
      }}
    >
      <Box
        sx={{
          maxWidth: '500px',
          width: '100%', // Установите ширину в 100% для адаптивности
          bgcolor: 'red',
          aspectRatio: '0.8 / 1', // Установите соотношение сторон 1:1
          // background: `url('/images/main-dark.jpg')`,
          // backgroundSize: '100% 100%'
        }}
      />
    </Box>
  )
}

/*
    <Box
      sx={{
        maxWidth: '500px',
        width: '100%', // Установите ширину в 100% для адаптивности
        bgcolor: 'red',
        aspectRatio: '0.8 / 1', // Установите соотношение сторон 1:1
        background: `url('/images/main-dark.jpg')`,
        backgroundSize: '100% 100%'
      }}
    >
      Box
    </Box>
*/