import './App.css'
import Navbar from './Navbar'
import { CssBaseline } from '@mui/material'
import PlayGame from './PlayGame'
import Manual from './Manual'
import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Typography variant="h1" component="h1">
        Welcome to Rainbowland🌈
      </Typography>

      <div>
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Item><PlayGame numDice={4} /></Item>
          <Item><Manual /></Item>

        </Stack>
      </div>
    </>
  )
}

export default App
