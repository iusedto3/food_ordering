import { Box } from '@mui/material';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Sidebar from './Sidebar/Sidebar';

const MainLayout = ({ children }) => {
return (
<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
    <Sidebar />
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
    </Box>
    </Box>
    <Footer />
</Box>
);
};

export default MainLayout;