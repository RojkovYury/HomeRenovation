import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from "react";

interface ScrollButtonProps {
  handleOpen?: any;
}

export default function ScrollButton({ handleOpen }: ScrollButtonProps) {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Fab
      color="primary"
      onClick={scrollToTop}
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        opacity: showButton ? 1 : 0,
        transform: showButton ? 'translateY(0)' : 'translateY(10px)',
        visibility: showButton ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease',
      }}
    >
      <KeyboardArrowUpIcon fontSize={'large'}/>
    </Fab>
  )
}
