/* eslint-disable @next/next/no-img-element */
import { Box, Paper, Typography } from "@mui/material";

interface InfoBlockEmptyProps {
  paperSx?: any;
}

export default function InfoBlockEmpty({ paperSx }: InfoBlockEmptyProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        borderRadius: {
          xs: '0px 0px 0px 0px',
          sm: '16px 16px 0px 0px',
          md: '16px 16px 0px 0px',
        },
        p: '20px',
        mt: '8px',
        mr: { xs: '0px', sm: '0px', md: '8px' },
        mb: '8px',
        width: { xs: 'none', sm: 'none', md: '600px' },
        minWidth: { xs: 'none', sm: 'none', md: '300px' },
        ...paperSx,
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          mt: { xs: '0px', sm: '0px', md: '375px' },
        }}
      >
        <Typography sx={{ fontSize: { xs: '1.0rem', sm: '1.0rem', md: '1.5rem' } }}>
          Выберите метку на схеме
        </Typography>
      </Box>

    </Paper>
  )
}
