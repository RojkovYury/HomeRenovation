/* eslint-disable @next/next/no-img-element */
"use client"

import { Box, Dialog, Paper } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RoomTags from "./components/room-tags";
import GeneralRoomTags from "./components/general-room-tags";
import QuestionRoomTags from "./components/question-room-tags";
import AccordionItems from "./components/accordion-items";
import ScrollButton from "./components/scroll-button";
import MapFooter from "./components/map-footer";
import RightBlock from "./components/right-block";

const darkTheme = createTheme({ palette: { mode: 'dark' }});

export interface CurrentTag {
  id: string;
  room?: string;
  title?: string;
  description?: string;
  pics?: string[];
}

export default function Main() {
  const [currentTag, setCurrentTag] = useState<CurrentTag | undefined>();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const handleOpen = (img: string) => { setSelectedImage(img); setOpen(true); };
  const handleClose = () => { setOpen(false); setSelectedImage(''); };

  const [generalRoomTagsVisibility, setGeneralRoomTagsVisibility] = useState(true);
  const [roomTagsVisibility, setRoomTagsVisibility] = useState(true);
  const [questionRoomTagsVisibility, setQuestionRoomTagsVisibility] = useState(false);

  return (
    <ThemeProvider theme={darkTheme}>

      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', minWidth: '536px', maxWidth: '1400px', marginLeft: 'auto', marginRight: 'auto', minHeight: '101vh ', mb: '60px', mt: '18px' }}>

        <Box sx={{ m: '6px', width: '524px' }}>
          <Paper elevation={1} sx={{ borderRadius: '8px', width: '482px', p: '20px', position: 'relative' }}>
            <Box sx={{ width: '482px', height: '600px', background: `url('/images/main-dark.jpg')`, backgroundSize: '482px 600px' }} />
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

          <RightBlock currentTag={currentTag} handleOpen={handleOpen} paperSx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }} />

          <AccordionItems handleOpen={handleOpen}/>
        </Box>

        <RightBlock currentTag={currentTag} handleOpen={handleOpen} paperSx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} />

        <Dialog open={open} onClose={handleClose}>
          <img onClick={handleClose} src={selectedImage} alt="" style={{ width: '100%', height: 'auto' }} />
        </Dialog>
        <ScrollButton />
      </Box>
    </ThemeProvider>
  )
}
