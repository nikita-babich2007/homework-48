import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const Form = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', my: 4 }}>
      <Typography variant="h5" gutterBottom>
        Зв'язатись з нами
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          label="Ваше ім'я"
          variant="outlined"
        />
        <TextField
          margin="normal"
          fullWidth
          label="Email"
          type="email"
          variant="outlined"
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Надіслати
        </Button>
      </Box>
    </Paper>
  );
};

export default Form;