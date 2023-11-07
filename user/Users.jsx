/*export default function Users() {
//...
const [users, setUsers] = useState([])
return (
<Paper className={classes.root} elevation={4}>
<Typography variant="h6" className={classes.title}> 
All Users
</Typography> 
<List dense>
{users.map((item, i) => {
return <Link to={"/user/" + item._id} key={i}>
<ListItem button> 
<ListItemAvatar>
<Avatar> 
<Person/>
</Avatar>
</ListItemAvatar>
<ListItemText primary={item.name}/> 
<ListItemSecondaryAction>
<IconButton>
<ArrowForward/> 
</IconButton>
</ListItemSecondaryAction> 
</ListItem>
</Link> 
})} 
</List>
</Paper>
) 
}
useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal 
list(signal).then((data) => {
if (data && data.error) { 
console.log(data.error)
} else { 
setUsers(data)
} 
})
return function cleanup(){ 
abortController.abort()
} 
}, [])
*/







// TODO the above was commented out from start
//////////////////////////////////////////////////



import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom'; // Import Link for routing
import { list } from './api-user'; // Import list function from api-user.js ====>

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    fontSize: '1.25rem',
  },
}));

export default function Users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    // Replace this with your API call to fetch user data
    // Example: fetchUsers(signal).then((data) => {...});

    list(signal).then(data => setUsers(data)); // Use list function

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography variant="h6" className={classes.title}>
        All Users
      </Typography>
      <List dense>
        {users.map((item, i) => (
          <Link to={`/user/${item._id}`} key={i}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  {/* Add user avatar here */}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton>
                  <ArrowForwardIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Link>
        ))}
      </List>
    </Paper>
  );
}



// TODO uncomment the above when routes are working

// import React from 'react';

// const Users = () => {
//   return (
//     <h1>Users</h1>
//   )
// };

// export default Users;