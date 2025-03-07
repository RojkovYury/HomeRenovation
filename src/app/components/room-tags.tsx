import { Fab } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';

import { Dispatch, SetStateAction } from "react";
import { roomTags } from "../room-tags";
import { CurrentTag } from "../page";

interface RoomTagsProps {
  currentTag?: CurrentTag;
  setCurrentTag: Dispatch<SetStateAction<CurrentTag | undefined>>;
  roomTagsVisibility: boolean;
}

export default function RoomTags({ currentTag, setCurrentTag, roomTagsVisibility }: RoomTagsProps) {
  return (
    roomTagsVisibility && roomTags.map((el, index) => (
      <Fab
        key={index}
        onClick={() => currentTag?.id === el.id ? setCurrentTag(undefined) : setCurrentTag(el)}
        color={(currentTag?.id === el.id) ? "warning" : "primary"}
        sx={{
          position: 'absolute',
          height: '24px',
          minHeight: '24px',
          width: '24px',
          top: el.top,
          left: el.left,
          scale: currentTag?.id === el.id ? '1.3' : '1',
          transition: 'scale 0.3s ease',
        }}
      >
        <AdjustIcon sx={{ fontSize: '16px' }} />
      </Fab>
    ))
  )
}
