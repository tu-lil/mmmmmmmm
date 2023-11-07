/*export default function Signup() {
...
const [values, setValues] = useState({ 
name: '',
password: '', 
email: '', 
open: false,error: '' 
})
const handleChange = name => event => {
setValues({ ...values, [name]: event.target.value }) 
}
}
const clickSubmit = () => { 
const user = {
name: values.name || undefined,
email: values.email || undefined, 
password: values.password || undefined
}
create(user).then((data) => { 
if (data.error) {
setValues({ ...values, error: data.error}) 
} else {
setValues({ ...values, error: '', open: true}) 
}
}) 
}
return ( 
<div>
<Card className={classes.card}> 
<CardContent>
<Typography variant="h6" className={classes.title}> 
Sign Up
</Typography>
<TextField id="name" label="Name" 
className={classes.textField}value={values.name} onChange={handleChange('name')} 
margin="normal"/>
<br/>
<TextField id="email" type="email" label="Email" 
className={classes.textField}
value={values.email} onChange={handleChange('email')} 
margin="normal"/>
<br/>
<TextField id="password" type="password" label="Password" 
className={classes.textField} value={values.password} 
onChange={handleChange('password')} margin="normal"/>
<br/> 
{
values.error && (<Typography component="p" color="error">
)
<Icon color="error" className={classes.error}>error</Icon> 
{values.error}</Typography>)
}
</CardContent> 
<CardActions>
<Button color="primary" variant="contained" onClick={clickSubmit} 
className={classes.submit}>Submit</Button>
</CardActions> 
</Card>
    </div>
)

<Dialog open={values.open} disableBackdropClick={true}> 
<DialogTitle>New Account</DialogTitle>
<DialogContent>
<DialogContentText>
New account successfully created. 
</DialogContentText>
</DialogContent>
<DialogActions>
<Link to="/signin">
<Button color="primary" autoFocus="autoFocus" 
variant="contained">
Sign In 
</Button>
</Link>
</DialogActions> 
</Dialog>*/

//////////////////////////////////////////////////////

/*import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  submit: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));

const create = async (user) => {
  return { error: null }; // Simulated API call
};

export default function Signup() {
  const classes = useStyles();

  const [values, setValues] = useState({ 
    name: '',
    password: '', 
    email: '', 
    open: false,
    error: '' 
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    
  };

  const clickSubmit = () => { 
    const user = {
      name: values.name || undefined,
      email: values.email || undefined, 
      password: values.password || undefined
    };
    
    
    create(user).then((data) => { 
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', open: true });
      }
    });
  };


  
  return (
    <div>
      <Card className={classes.card}> 
        <CardContent>
          <Typography variant="h6" className={classes.title}> 
            Sign Up
          </Typography>
                  
        <TextField
          id="name"
          label="Name"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('name')}
          margin="normal"
        />
        <TextField
          id="email"
          label="Email"
          className={classes.textField}
          value={values.email}
          onChange={handleChange('email')}
          margin="normal"
        />
        <TextField
          id="password"
          label="Password"
          className={classes.textField}
          value={values.password}
          onChange={handleChange('password')}
          type="password"
          margin="normal"
        />
          //Other input fields 
          // Error message 
        </CardContent> 
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} 
            className={classes.submit}>
            Submit
          </Button>
        </CardActions> 
      </Card>

      <Dialog open={values.open} disableBackdropClick={true}> 
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/Signin">
            <Button color="primary" autoFocus variant="contained">
              Sign In 
            </Button>
          </Link>
        </DialogActions> 
      </Dialog>
    </div>
  );
}*/
//////////////////////////////////////////////////
/*import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  submit: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));

// Replace this with your actual API logic to create a user
const create = async (user) => {
  try {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();

    if (response.status === 200) {
      return { error: null };
    } else {
      return { error: data.error };
    }
  } catch (error) {
    return { error: 'Network error' };
  }
};

const Modal2 = ({ open, handleClose }) => (
  <Dialog open={open} onClose={() => handleClose('backdropClick')}>
    <DialogTitle>New Account</DialogTitle>
    <DialogContent>
      <DialogContentText>New account successfully created.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Link to="/Signin">
        <Button color="primary" autoFocus variant="contained">
          Sign In
        </Button>
      </Link>
    </DialogActions>
  </Dialog>
);

export default function Signup() {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
    open: false,
    error: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };

    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: '', open: true });
      }
    });
  };

  const handleModalClose = (reason) => {
    if (reason === 'backdropClick') {
      // Handle backdrop click event here
    }
    setValues({ ...values, open: false });
  };

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" className={classes.title}>
            Sign Up
          </Typography>

          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange('password')}
            type="password"
            margin="normal"
          />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            className={classes.submit}
          >
            Submit
          </Button>
        </CardActions>
      </Card>

      <Modal2 open={values.open} handleClose={handleModalClose} />
    </div>
  );
}
*/



// TODO the above was commented out from start
//////////////////////////////////////////////////




import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, TextField, CardActions, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { create } from './api-user';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    margin: '0 auto',
    marginTop: theme.spacing(3),
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  textField: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  error: {
    color: 'red',
  },
  submit: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 18,
  },
}));

// const create = async (user) => {
//   return { error: null }; // Simulated API call
// };

export default function Signup() {
  const classes = useStyles();

  const [values, setValues] = useState({ 
    name: '',
    password: '', 
    email: '',
  });

  const [open, setOpen] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickSubmit = () => { 
    const user = {
      name: values.name || undefined,
      email: values.email || undefined, 
      password: values.password || undefined,
    };

    create(user).then((data) => { 
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setOpen(true);
      }
    });
  };

  Signup.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Card className={classes.card}> 
        <CardContent>
          <Typography variant="h6" className={classes.title}> 
            Sign Up
          </Typography>
                  
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChange('email')}
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            className={classes.textField}
            value={values.password}
            onChange={handleChange('password')}
            type="password"
            margin="normal"
          />
        </CardContent> 
        <CardActions>
          <Button color="primary" variant="contained" onClick={clickSubmit} 
            className={classes.submit}>
            Submit
          </Button>
        </CardActions> 
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created. 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/Signin">
            <Button color="primary" autoFocus variant="contained" onClick={handleClose}>
              Sign In 
            </Button>
          </Link>
        </DialogActions> 
      </Dialog>
    </div>
  );
}

// TODO uncomment the above when routes are working

// import React from 'react';

// const Signup = () => {
//   return (
//     <h1>Signup</h1>
//   )
// };

// export default Signup;