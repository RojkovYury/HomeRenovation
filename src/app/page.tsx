/* eslint-disable @next/next/no-img-element */
"use client"

import { Box, Dialog, Link, Paper } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useState } from "react";
import RoomTags from "./components/room-tags";
import GeneralRoomTags from "./components/general-room-tags";
import QuestionRoomTags from "./components/question-room-tags";
import AccordionItems from "./components/accordion-items";
import ScrollButton from "./components/scroll-button";
import MapFooter from "./components/map-footer";
import InfoBlock from "./components/info-block";
import InfoBlockEmpty from "./components/info-block-empty";

export interface CurrentTag {
  id: string;
  room?: string;
  title?: string;
  description?: string;
  pics?: string[];
  links?: string[];
}

export default function Main() {
  const [currentTag, setCurrentTag] = useState<CurrentTag | undefined>();
  const [imgOpen, setImgOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const handleOpen = (img: string) => { setSelectedImage(img); setImgOpen(true); };
  const handleClose = () => { setImgOpen(false); setSelectedImage(''); };

  const theme = useTheme();
  const imageSrc = theme.palette.mode === 'dark' 
    ? '/images/main-dark.jpg' 
    : '/images/main-light.jpg';

  const [generalRoomTagsVisibility, setGeneralRoomTagsVisibility] = useState(true);
  const [roomTagsVisibility, setRoomTagsVisibility] = useState(true);
  const [questionRoomTagsVisibility, setQuestionRoomTagsVisibility] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: '101vh ',
        mb: '60px',
      }}
    >
      {/* Left side */}
      <Box
        sx={{
          width: '100%',
          maxWidth: '600px',
          position: 'relative',
          m: { xs: '0px', sm: '8px', md: '8px' },
        }}
      >
        <Paper
          elevation={1}
          sx={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            aspectRatio: '0.8 / 1',
            borderRadius: { xs: '0px', sm: '16px', md: '16px' },
            overflow: 'hidden',
          }}
        >
          <Box sx={{ p: '12px' }}>
            <img src={imageSrc} alt="" style={{ width: '100%', height: '100%' }} onClick={() => setCurrentTag(undefined)} />
          </Box>
          <GeneralRoomTags currentTag={currentTag} setCurrentTag={setCurrentTag} generalRoomTagsVisibility={generalRoomTagsVisibility} />
          <RoomTags currentTag={currentTag} setCurrentTag={setCurrentTag} roomTagsVisibility={roomTagsVisibility} />
          <QuestionRoomTags currentTag={currentTag} setCurrentTag={setCurrentTag} questionRoomTagsVisibility={questionRoomTagsVisibility} />
        </Paper>
        <MapFooter
          generalRoomTagsVisibility={generalRoomTagsVisibility}
          setGeneralRoomTagsVisibility={setGeneralRoomTagsVisibility} 
          roomTagsVisibility={roomTagsVisibility}
          setRoomTagsVisibility={setRoomTagsVisibility}
          questionRoomTagsVisibility={questionRoomTagsVisibility}
          setQuestionRoomTagsVisibility={setQuestionRoomTagsVisibility}
        />
        {currentTag && (<InfoBlock currentTag={currentTag} setCurrentTag={setCurrentTag} handleOpen={handleOpen} paperSx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }} />)}
        {!currentTag && <InfoBlockEmpty paperSx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }} />}
        <AccordionItems handleOpen={handleOpen}/>
      </Box>

      {/* Right side */}
      {currentTag && <InfoBlock currentTag={currentTag} setCurrentTag={setCurrentTag} handleOpen={handleOpen} paperSx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} />}
      {!currentTag && <InfoBlockEmpty paperSx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} />}

      <Dialog open={imgOpen} onClose={handleClose}>
        <img onClick={handleClose} src={selectedImage} alt="" style={{ width: '100%', height: 'auto' }} />
      </Dialog>
      <ScrollButton />
    </Box>
  )
}
