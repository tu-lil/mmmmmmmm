import withRouter from 'react'
import AppBar from 'react'
import Toolbar from 'react'
import Typography from 'react'
import Link from 'react'
import IconButton from 'react'
//import isActive from 'react'
import HomeIcon from 'react'
import Button from 'react'
import auth from '../auth/api-auth'

const Menu = withRouter(({ history }) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                MERN Skeleton
            </Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                    <HomeIcon />
                </IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Users</Button>
            </Link>
        </Toolbar>
    </AppBar>))
const isActive = (history, path) => {
    if (history.location.pathname == path)
        return { color: '#ff4081' }
    else
        return { color: '#ffffff' }

}
{
    !auth.isAuthenticated() && (<span>
        <Link to="/Signup">
            <Button style={isActive(history, "/signup")}> Sign Up </Button>
        </Link>
        <Link to="/Signin">
            <Button style={isActive(history, "/signin")}> Sign In </Button>
        </Link>
    </span>)
}
{
    auth.isAuthenticated() && (<span>
        <Link to={"/user/" + auth.isAuthenticated().user._id}>
            <Button style={isActive(history, "/user/"
                + auth.isAuthenticated().user._id)}>
                My Profile
            </Button>
        </Link>
        <Button color="inherit"
            onClick={() => { auth.clearJWT(() => history.push('/')) }}>
            Sign out
        </Button>
    </span>)
}