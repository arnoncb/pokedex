import { Dialog } from "@material-ui/core"

import "./modal.css"

export function ModalContainer(props) {
  const { open, handleClose, children } = props
  return (
    <Dialog
      classes={{ paper: "modal" }}
      onClose={handleClose}
      open={open}
      maxWidth="lg"
    >
      {children}
    </Dialog>
  )
}
