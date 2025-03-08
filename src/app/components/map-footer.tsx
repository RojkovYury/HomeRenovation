import { Box, Fab, IconButton, Switch } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RoomIcon from '@mui/icons-material/Room';
import AdjustIcon from '@mui/icons-material/Adjust';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

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
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: '8px', my: '8px' }}>
      
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: '6px'}}
          onClick={() => props.setGeneralRoomTagsVisibility((prevState) => !prevState)}
        >
          <Fab color="success" sx={{ height: '26px', minHeight: '26px', width: '26px' }}>
            <RoomIcon sx={{ fontSize: '20px' }} />
          </Fab>
          <Switch color="success" checked={props.generalRoomTagsVisibility} size="small" />
        </Box>

        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', mr: '6px' }}
          onClick={() => props.setRoomTagsVisibility((prevState) => !prevState)}
        >
          <Fab color="primary" sx={{ height: '26px', minHeight: '26px', width: '26px' }}>
            <AdjustIcon sx={{ fontSize: '16px' }} />
          </Fab>
          <Switch color="primary" checked={props.roomTagsVisibility} size="small" />
        </Box>

        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => props.setQuestionRoomTagsVisibility((prevState) => !prevState)}
        >
          <Fab color="secondary" sx={{ height: '26px', minHeight: '26px', width: '26px' }}>
            <QuestionMarkIcon sx={{ fontSize: '16px' }} />
          </Fab>
          <Switch color="secondary" checked={props.questionRoomTagsVisibility} size="small" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton
          size="small"
          onClick={() => {
            props.setGeneralRoomTagsVisibility(false);
            props.setRoomTagsVisibility(false);
            props.setQuestionRoomTagsVisibility(false);
          }}
        >
          <VisibilityOffIcon />

        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            props.setGeneralRoomTagsVisibility(true);
            props.setRoomTagsVisibility(true);
            props.setQuestionRoomTagsVisibility(true);
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </Box>
    </Box>
  )
}
