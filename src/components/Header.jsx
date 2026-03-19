import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My MUI Project
        </Typography>
        <Button color="inherit">Головна</Button>
        <Button color="inherit">Профіль</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;