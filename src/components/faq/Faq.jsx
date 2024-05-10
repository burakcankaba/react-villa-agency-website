import { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsPlusCircle } from 'react-icons/bs';
import { BiMinusCircle } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';

import "./faq.css";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { t } = useTranslation()

  return (
    <div>
        <h3>{t('faq')}</h3>
        <div className="faqAccordions">

          <div className="faqAccordionsLeft">
          <Accordion className='faqAccordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel1'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                  {t('faq1_title')}
                  </Typography>
                  
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq1_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
            <Accordion className='faqAccordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel2'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                  {t('faq2_title')}
                  </Typography>
                  
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq2_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
            <Accordion className='faqAccordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel3'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                  {t('faq3_title')}
                  </Typography>
                  
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq3_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
            <Accordion className='faqAccordion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel4'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                    {t('faq4_title')}
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq4_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
          </div>
          <div className="faqAccordionsRight">
          <Accordion className='faqAccordion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel5'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel5bh-content"
                  id="panel5bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                  {t('faq5_title')}
                  </Typography>
                  
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq5_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
            <Accordion className='faqAccordion' expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel6'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel6bh-content"
                  id="panel6bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                  {t('faq6_title')}
                  </Typography>
                  
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq6_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
            <Accordion className='faqAccordion' expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel7'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel7bh-content"
                  id="panel7bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                  {t('faq7_title')}
                  </Typography>
                  
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq7_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
            <Accordion className='faqAccordion' expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                  <AccordionSummary
                  expandIcon={expanded === 'panel8'?<BiMinusCircle />:<BsPlusCircle />}
                  aria-controls="panel8bh-content"
                  id="panel8bh-header"
                  className='faqAccordionSum'
                  >
                  <Typography className='faqAccordionTitle'>
                  {t('faq8_title')}
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography className='faqAccordionDesc'>
                  {t('faq8_desc')}
                  </Typography>
                  </AccordionDetails>
            </Accordion>
          </div>
              
        </div>
        
      
    </div>
  )
}

export default Faq