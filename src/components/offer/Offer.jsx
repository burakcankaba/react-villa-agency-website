import { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const steps = ['Select Date Range', 'Select Price Range', 'Select Your Plan','Enter Your Information'];

const Offer = ({setOpenModal,openModal}) => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const handleClose = () => setOpenModal(false);
    const isStepOptional = (step) => {
        return step === 2;
      };
    
      const isStepSkipped = (step) => {
        return skipped.has(step);
      };
    
      const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      };
    
      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    
      const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
          // You probably want to guard against something like this,
          // it should never occur unless someone's actively trying to break something.
          throw new Error("You can't skip a step that isn't optional.");
        }
    
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
          const newSkipped = new Set(prevSkipped.values());
          newSkipped.add(activeStep);
          return newSkipped;
        });
      };
    
      const handleReset = () => {
        setOpenModal(false);
      };
      

      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1024,
        bgcolor: 'background.paper',
        border: '1px solid #fbaf40',
        boxShadow: 24,
        p: 4,
      };
  return (
    <> 
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Get an Offer
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}component="div">
            <Box sx={{ width: '100%' }}>
                      <Stepper activeStep={activeStep}>
                          {steps.map((label, index) => {
                          const stepProps = {};
                          const labelProps = {};
                          if (isStepOptional(index)) {
                              labelProps.optional = (
                              <Typography variant="caption">Optional</Typography>
                              );
                          }
                          if (isStepSkipped(index)) {
                              stepProps.completed = false;
                          }
                          return (
                              <Step key={label} {...stepProps}>
                              <StepLabel {...labelProps}>{label}</StepLabel>
                              </Step>
                          );
                          })}
                      </Stepper>
                {activeStep === steps.length ? (
                    <>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Close</Button>
                    </Box>
                    </>
                ) : (
                    <>
                    <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        >
                        Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        {isStepOptional(activeStep) && (
                        <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                            Skip
                        </Button>
                        )}

                        <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Send Request' : 'Next'}
                        </Button>
                    </Box>
                    </>
                )}
                </Box>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </>
    
  )
}

export default Offer