import useState from "react";
import setOpen from "react";
import props from "react";
import auth from "./auth/auth-helper.js";
import setRedirect from "react";
import remove from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/core/DeleteIcon";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export default function DeleteUser(props) {
  //...
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  //...
  const clickButton = () => {
    setOpen(true);
  };
  const handleRequestClose = () => {
    setOpen(false);
  };
  const deleteAccount = () => {
    const jwt = auth.isAuthenticated();
    remove(
      {
        userId: props.userId,
      },
      { t: jwt.token }
    ).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        auth.clearJWT(() => console.log("deleted"));
        setRedirect(true);
      }
    });
  };
  return (
    <span>
      <IconButton aria-label="Delete" onClick={clickButton} color="secondary">
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleRequestClose}>
        Cancel
        <DialogTitle>{"Delete Account"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Confirm to delete your account.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRequestClose} color="primary"></Button>
          <Button
            onClick={deleteAccount}
            color="secondary"
            autoFocus="autoFocus"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </span>
  );
}
DeleteUser.propTypes = {
  userId: PropTypes.string.isRequired,
};
