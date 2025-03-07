/* eslint-disable @next/next/no-img-element */
import { Box, Divider, ImageList, ImageListItem, Paper, Typography } from "@mui/material";
import { CurrentTag } from "../page";

interface RightBlockProps {
  currentTag?: CurrentTag;
  handleOpen: any;
}

export default function RightBlock({ currentTag, handleOpen }: RightBlockProps) {
  return (
    <Paper
      elevation={2}
      sx={{
        borderRadius: '8px',
        p: '20px',
        m: '6px',
        width: '1000px', // !
        display: !currentTag ? 'none' : 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">
          {currentTag && currentTag.room}
        </Typography>
        <Typography variant="subtitle2">
          id: {currentTag && currentTag.id}
        </Typography>
      </Box>

      <Divider sx={{ my: '8px' }}/>

      <Typography variant="h5" sx={{ mb: '8px' }}>
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
