import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
return (
<div style={{ marginRight: '20px' }}>
    <Button color="inherit" component={Link} to="/">Home</Button>
    <Button color="inherit" component={Link} to="/menu">Menu</Button>
    <Button color="inherit" component={Link} to="/about">About</Button>
    <Button color="inherit" component={Link} to="/contact">Contact</Button>
</div>
);
};

export default Navbar;