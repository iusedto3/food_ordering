import { Box, Typography, Container, Grid, Link } from '@mui/material';

const Footer = () => {
return (
<Box component="footer" sx={{ py: 3, backgroundColor: 'primary.main', color: 'white' }}>
    <Container maxWidth="lg">
    <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
            FoodOrder
        </Typography>
        <Typography>
            The best food delivery service in town.
        </Typography>
        </Grid>
        <Grid item xs={6} md={2}>
        <Typography variant="h6" gutterBottom>
            Links
        </Typography>
        <Link href="#" color="inherit" display="block">Home</Link>
        <Link href="#" color="inherit" display="block">Menu</Link>
        <Link href="#" color="inherit" display="block">About</Link>
        </Grid>
        <Grid item xs={6} md={2}>
        <Typography variant="h6" gutterBottom>
            Legal
        </Typography>
        <Link href="#" color="inherit" display="block">Privacy Policy</Link>
        <Link href="#" color="inherit" display="block">Terms of Use</Link>
        </Grid>
        <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
            Contact
        </Typography>
        <Typography>123 Food Street, Food City</Typography>
        <Typography>Email: info@foodorder.com</Typography>
        <Typography>Phone: +123 456 7890</Typography>
        </Grid>
    </Grid>
    <Typography align="center" sx={{ mt: 3 }}>
        © {new Date().getFullYear()} FoodOrder. All rights reserved.
    </Typography>
    </Container>
</Box>
);
};

export default Footer;