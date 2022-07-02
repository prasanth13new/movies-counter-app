import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { NotFound } from './NotFound';
import { MovieList } from './MovieList';
import { AddMovie } from "./AddMovie";
import { MovieDetails } from './MovieDetails';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { EditMovie } from './EditMovie';
import { BasicForm } from './BasicForm';

function App() {
  // Lifting the state up - APP (common parent)

  const navigate = useNavigate();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: "100vh" }}>
        <div className="App">

          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
              <Button color="inherit" onClick={() => navigate("movies")}>Movies</Button>
              <Button color="inherit" onClick={() => navigate("somewhere")}>Somewhere</Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>AddMovie</Button>
              <Button color="inherit" onClick={() => navigate("/basic-form")}>Login</Button>
              <Button style={{"margin-left": "auto"}} startIcon={mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />} color="inherit" onClick={() => setMode(mode === "dark" ? "light" : "dark")}>
                {mode === "dark" ? "light" : "dark"} Mode
              </Button>
            </Toolbar>
          </AppBar>

          {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
          <li>
            <Link to="somewhere">Somewhere</Link>
          </li>
          <li>
            <Link to="/movies/add">AddMovie</Link>
          </li>
        </ul>
      </nav> */}

          <div className="router-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="movies" element={<MovieList />} />
              <Route path="/films" element={<Navigate replace to="/movies" />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/movies/edit/:id" element={<EditMovie />} />
              <Route path="basic-form" element={<BasicForm />} />
              <Route path="/404" element={<NotFound />} />
              {/* /sdgsdgfhgs --> /404 */}
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function Home() {
  return <h1>Welcome to the Movie App🎊🎊</h1>
}

export default App;
