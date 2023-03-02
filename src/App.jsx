import { Container, AppBar, Typography, Grid, Grow } from "@mui/material";
import "./App.css";
import { Post, Posts, Form } from "./components";

function App() {
  return (
    <Container maxWidth="lg" sx={{ position: "relative" }}>
      <div className="fixed h-72 w-64 bg-gradient-to-tr from-purple-400 via-indigo-400 to-fuchsia-500 rounded-full -z-10 blub mt-40 ml-40 top-40" />
      <div className="fixed h-72 w-64 bg-gradient-to-tr from-purple-400 lg:block hidden via-indigo-400 to-fuchsia-500 rounded-full -z-10 blub right-[250px] mt-4 top-40" />
      <Typography variant="h3" sx={{ textAlign: "center", mt: 1 }} className="bg-white/20 ">
        <span className="font-neon text-black">Memorys</span>
      </Typography>
      <Grow in>
        <Container>
          <Grid container sx={{ justifyContent: "space-between", display: "flex", flexDirection: { sm: "row", xs: "column-reverse" }, alignItems: "stretch", mt: 2 }} spacing={3} className="bg-white/20 rounded-lg">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
