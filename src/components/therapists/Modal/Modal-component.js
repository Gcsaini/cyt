import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";



export default function ModalComponent({ open, handleClose,width="60%", content }) {

  const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width:width,
  bgcolor: "background.paper",
  border: "1px solid grey",
  boxShadow: 24,
  p: 4
};

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="modal-box">
        {content}
      </Box>
    </Modal>
  );
}
