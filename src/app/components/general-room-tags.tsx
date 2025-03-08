import { Fab } from "@mui/material";
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ChairIcon from '@mui/icons-material/Chair';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import { Dispatch, SetStateAction } from "react";
import { generalRoomTags } from "../general-room-tags";
import { CurrentTag } from "../page";


interface GeneralRoomTagsProps {
  currentTag?: CurrentTag;
  setCurrentTag: Dispatch<SetStateAction<CurrentTag | undefined>>;
  generalRoomTagsVisibility: boolean;
}

export default function GeneralRoomTags({ currentTag, setCurrentTag, generalRoomTagsVisibility }: GeneralRoomTagsProps) {
  return (
    generalRoomTagsVisibility && generalRoomTags.map((el, index) => (
      <Fab
        key={index}
        onClick={() => currentTag?.id === el.id ? setCurrentTag(undefined) : setCurrentTag(el)}
        color={(currentTag?.id === el.id) ? "warning" : "success"}
        sx={{
          position: 'absolute',
          height: '40px',
          minHeight: '40px',
          width: '40px',
          top: el.top,
          left: el.left,
          // scale: currentTag?.id === el.id ? '1.3' : '1',
          /*
          - xs: 0px -599px
          - sm: 600px - 899px
          - md: 900px - 1199px
          - lg: 1200px
          */
          scale: {
            xs: currentTag?.id === el.id ? '1' : '0.85',
            sm: currentTag?.id === el.id ? '1.3' : '1',
            md: currentTag?.id === el.id ? '1.3' : '1',
          },
          transition: 'scale 0.3s ease',
          zIndex: '100',
        }}
      >
        {el?.id === 'generalRoomTags_0' && (<CheckroomIcon />)}
        {el?.id === 'generalRoomTags_1' && (<ChairIcon />)}
        {el?.id === 'generalRoomTags_2' && (<RoomServiceIcon />)}
        {el?.id === 'generalRoomTags_3' && (<BedIcon />)}
        {el?.id === 'generalRoomTags_4' && (<ShowerIcon />)}
      </Fab>
    ))
  )
}
// display: { xs: 'none', sm: 'none', md: 'flex' }