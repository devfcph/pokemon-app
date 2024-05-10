import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};




export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <table>
            <tbody>
              <tr>
                <td>Mi imagen 1 </td>
                <td>
                    <ul>
                        <li>
                            Nombre:
                        </li>
                        <li>
                            Peso:
                        </li>
                        <li>
                            Altura:
                        </li>
                    </ul>
                </td>
              </tr>
              <tr>
                <td>Mi imagen 2</td>
                <td>
                    <p>Movimientos:</p>
                    <ul>
                        <li>
                            1--
                        </li>
                        <li>2--</li>
                    </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Modal>
    </div>
  );
}
