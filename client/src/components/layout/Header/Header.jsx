import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { ShoppingCart, AccountCircle } from '@mui/icons-material';
import Navbar from './Navbar';

const Header = () => {
return (
<AppBar position="static">
    <Toolbar>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        FoodOrder
    </Typography>
    
    <Navbar />
    
    <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
        <ShoppingCart />
        </Badge>
    </IconButton>
    
    <Button color="inherit" startIcon={<AccountCircle />}>
        Login
    </Button>
    </Toolbar>
</AppBar>
);
};

export default Header;