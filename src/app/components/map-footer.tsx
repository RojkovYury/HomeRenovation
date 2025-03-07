import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface MapFooterProps {
  generalRoomTagsVisibility?: boolean;
  setGeneralRoomTagsVisibility: Dispatch<SetStateAction<boolean>>;
  roomTagsVisibility?: boolean;
  setRoomTagsVisibility: Dispatch<SetStateAction<boolean>>;
  questionRoomTagsVisibility?: boolean;
  setQuestionRoomTagsVisibility: Dispatch<SetStateAction<boolean>>;
}

export default function MapFooter(props: MapFooterProps) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '4px' }}>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          onClick={() => {
            props.setGeneralRoomTagsVisibility(true);
            props.setRoomTagsVisibility(true);
            props.setQuestionRoomTagsVisibility(true);
          }}
        >
          <VisibilityIcon fontSize="inherit" />
        </IconButton>

        <IconButton
          onClick={() => {
            props.setGeneralRoomTagsVisibility(false);
            props.setRoomTagsVisibility(false);
            props.setQuestionRoomTagsVisibility(false);
          }}
        >
          <VisibilityOffIcon fontSize="inherit" />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}}
          onClick={() => props.setGeneralRoomTagsVisibility((prevState) => !prevState)}
        >
          <Typography variant='body2' color={'#fff'} sx={{ userSelect: 'none' }}>Комнаты</Typography>
          <Checkbox size='small' checked={props.generalRoomTagsVisibility} />
        </Box>

        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => props.setRoomTagsVisibility((prevState) => !prevState)}
        >
          <Typography variant='body2' color={'#fff'} sx={{ userSelect: 'none' }}>Детали</Typography>
          <Checkbox size='small' checked={props.roomTagsVisibility} />
        </Box>

        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => props.setQuestionRoomTagsVisibility((prevState) => !prevState)}
        >
          <Typography variant='body2' color={'#fff'} sx={{ userSelect: 'none' }}>Вопросы</Typography>
          <Checkbox size='small' checked={props.questionRoomTagsVisibility} />
        </Box>
      </Box>

    </Box>
  )
}
