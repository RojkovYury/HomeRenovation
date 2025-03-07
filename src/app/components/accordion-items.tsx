/* eslint-disable @next/next/no-img-element */

import { Accordion, AccordionDetails, AccordionSummary, Box, ImageList, ImageListItem, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { accordionTags } from "../accordion-items";

interface AccordionItemsProps {
  handleOpen?: any;
}

export default function AccordionItems({ handleOpen }: AccordionItemsProps) {
  return (
    <Box sx={{ pt: '4px' }}>
      {accordionTags.map((row) => (
        <Accordion key={row.id}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography component="span">{row.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography variant="subtitle2" dangerouslySetInnerHTML={{ __html: row.description }} />

            <ImageList
              variant="masonry"
              cols={2}
              gap={8}
            >
              {row.pics && row.pics.map((item, index) => (
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

          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  )
}
