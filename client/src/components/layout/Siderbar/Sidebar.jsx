import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Restaurant, History, Settings, Help } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
return (
<Drawer
    variant="permanent"
    sx={{
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
    },
    }}
>
    <List>
    <ListItem button component={Link} to="/">
        <ListItemIcon><Home /></ListItemIcon>
        <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/menu">
        <ListItemIcon><Restaurant /></ListItemIcon>
        <ListItemText primary="Menu" />
    </ListItem>
    <ListItem button component={Link} to="/order-history">
        <ListItemIcon><History /></ListItemIcon>
        <ListItemText primary="Order History" />
    </ListItem>
    <ListItem button component={Link} to="/settings">
        <ListItemIcon><Settings /></ListItemIcon>
        <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button component={Link} to="/help">
        <ListItemIcon><Help /></ListItemIcon>
        <ListItemText primary="Help" />
    </ListItem>
    </List>
</Drawer>
);
};

export default Sidebar;