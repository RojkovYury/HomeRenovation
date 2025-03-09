/* eslint-disable @next/next/no-img-element */
import { Box, Divider, IconButton, ImageList, ImageListItem, Link, Paper, Typography } from "@mui/material";
import { CurrentTag } from "../page";
import { generalRoomTags } from "../general-room-tags";
import { roomTags } from "../room-tags";
import { questionRoomTags } from "../question-room-tags";
import { Dispatch, SetStateAction } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface InfoBlockProps {
  currentTag?: CurrentTag;
  setCurrentTag: Dispatch<SetStateAction<CurrentTag | undefined>>;
  handleOpen: any;
  paperSx?: any;
}

export default function InfoBlock({ currentTag, setCurrentTag, handleOpen, paperSx }: InfoBlockProps) {
  
  console.log(currentTag);
  
  const nextTag = () => {
    let currentDb;
    if (currentTag) {
      if (currentTag.id.startsWith('generalRoomTags')) {
        currentDb = generalRoomTags;
      } else if (currentTag.id.startsWith('roomTags')) {
        currentDb = roomTags;
      } else if (currentTag.id.startsWith('questionTags')) {
        currentDb = questionRoomTags;
      }
      const currentIndex = currentDb?.findIndex((tag) => tag.id === currentTag.id);
      if (currentIndex !== -1) {
        const nextIndex = currentDb && currentIndex !== undefined ? (currentIndex + 1) % currentDb.length : 0;
        currentDb && setCurrentTag(currentDb[nextIndex]);
      }
    }
  };

  const prevTag = () => {
    let currentDb;
    if (currentTag) {
      if (currentTag.id.startsWith('generalRoomTags')) {
          currentDb = generalRoomTags;
      } else if (currentTag.id.startsWith('roomTags')) {
          currentDb = roomTags;
      } else if (currentTag.id.startsWith('questionTags')) {
          currentDb = questionRoomTags;
      }
      const currentIndex = currentDb?.findIndex((tag) => tag.id === currentTag.id);
      if (currentIndex !== -1) {
        const prevIndex = currentDb && currentIndex !== undefined ? (currentIndex - 1 + currentDb.length) % currentDb.length : 0;
        currentDb && setCurrentTag(currentDb[prevIndex]);
      }
    }
  };

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
        <Box>
          <IconButton size="small" onClick={prevTag}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton size="small" onClick={nextTag}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
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

      {currentTag && currentTag.description && 
        <Typography variant="body2" dangerouslySetInnerHTML={{ __html: currentTag.description }}/>
      }

      {currentTag?.links && (
        currentTag?.links.map((el, index) => (
          <Link target={"_blank"} href={el}>Ссылка {index + 1}</Link>
        ))
      )}

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
