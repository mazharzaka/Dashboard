import React from "react";
import copy from "copy-to-clipboard";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SpeachToText() {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      startListening: "ar-EG",
    });
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div className="Image-contain">
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{width: "100%"}}>
          Text is copied
        </Alert>
      </Snackbar>
      <h2 className="nameimage">SpeachToText</h2>
      <div className="recorde">
        <div className="contian-recorde">
          <p className="text-script"> {transcript}</p>
          <div className="btns">
            <button className="gn-btn" onClick={startListening}>
              Start
            </button>
            <button
              className="gn-btn"
              onClick={SpeechRecognition.stopListening}>
              Stop
            </button>
            <button
              className="gn-btn"
              onClick={() => {
                copy(transcript, {
                  debug: true,
                  message: "Press #{key} to copy",
                });
                setOpen(true);
              }}>
              Copy
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
