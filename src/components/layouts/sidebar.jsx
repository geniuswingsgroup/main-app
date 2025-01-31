import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import CloseIcon from '@mui/icons-material/Close'; // Close icon
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const routes = [
    { name: 'Manage Team', path: '/manage-team' },
    { name: 'Courses', path: '/courses' },
    { name: 'Manage Courses', path: '/manage-courses' },
    { name: 'Manage Register Course', path: '/manage-register-course' },
    { name: 'Our Projects', path: '/our-projects' },
    { name: 'Manage Project', path: '/manage-project' },
    { name: 'Manage Features', path: '/manage-features' },
    { name: 'About us', path: '/about-us' },
    { name: 'Contact us', path: '/contact-us' },
    { name: 'Manage Contact', path: '/manage-contact' },
  ];

  const Authroutes = [
    { name: 'Register', path: '/register' },
    { name: 'Login', path: '/login' },
    { name: 'Manage users', path: '/users' },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {routes.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton component={Link} to={route.path}>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {Authroutes.map((route) => (
          <ListItem key={route.name} disablePadding>
            <ListItemButton component={Link} to={route.path}>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* IconButton with MenuIcon to toggle the drawer */}
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
        <MenuIcon style={{color:"#E4C24A"}} />
      </IconButton>

      {/* Drawer component with the anchor set to 'right' */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
