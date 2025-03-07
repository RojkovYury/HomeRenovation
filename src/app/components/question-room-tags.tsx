import { Fab } from "@mui/material";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Dispatch, SetStateAction } from "react";
import { questionRoomTags } from "../question-room-tags";
import { CurrentTag } from "../page";


interface QuestionRoomTagsProps {
  currentTag?: CurrentTag;
  setCurrentTag: Dispatch<SetStateAction<CurrentTag | undefined>>;
  questionRoomTagsVisibility: boolean;
}

export default function QuestionRoomTags({ currentTag, setCurrentTag, questionRoomTagsVisibility }: QuestionRoomTagsProps) {
  return (
    questionRoomTagsVisibility && questionRoomTags.map((el, index) => (
      <Fab
        key={index}
        onClick={() => currentTag?.id === el.id ? setCurrentTag(undefined) : setCurrentTag(el)}
        color={(currentTag?.id === el.id) ? "warning" : "secondary"}
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
        <QuestionMarkIcon sx={{ fontSize: '16px' }} />
      </Fab>
    ))
  )
}
