/* eslint-disable @next/next/no-img-element */
import { Box, Divider, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import { CurrentTag } from "../page";

interface InfoBlockProps {
  currentTag?: CurrentTag;
  handleOpen: any;
  paperSx?: any;
}

export default function InfoBlock({ currentTag, handleOpen, paperSx }: InfoBlockProps) {
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
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">
          {currentTag && currentTag.room}
        </Typography>
        {/*
        <Typography variant="subtitle2">
          {currentTag && `id: ${currentTag.id}`}
        </Typography>
        */}
      </Box>

      <Divider sx={{ my: '8px' }}/>

      <Typography variant="h5" sx={{ mb: '8px' }} >
        {currentTag && currentTag.title}
      </Typography>

      <Typography variant="body2">
        {currentTag && currentTag.description}
      </Typography>

      {currentTag && currentTag?.pics && (
        <ImageList
          variant="masonry"
          cols={currentTag?.pics.length === 1 
            ? 1
            : currentTag?.pics.length > 2 && currentTag?.pics.length < 6
              ? 2 
              : 3}
          gap={8}
        >
          {currentTag.pics.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`${item}`}
                src={`${item}`}
                alt={index.toString()}
                loading="lazy"
                style={{ borderRadius: '16px', cursor: 'pointer' }}
                onClick={() => handleOpen(item)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Paper>
  )
}
