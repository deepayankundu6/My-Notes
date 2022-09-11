import AddIcon from '@mui/icons-material/Add';
import { Fragment } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Search from './Search';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Grid2 container spacing={1}>
        <Grid2 xs={1}>
        </Grid2>
        <Grid2 xs={10}>
          <div style={notesStyle} className="md-10 sd-10"> Notes </div>
        </Grid2>

        <Grid2 xs={1}>
          <AddIcon style={AddStyle} className="md-2 sd-2" onClick={() => navigate('add')} />
        </Grid2>

      </Grid2>
      <Grid2 container spacing={1}>
        <Grid2 xs={1}>
        </Grid2>
        <Grid2 xs={10}>
          <Search />
        </Grid2>
        <Grid2 xs={1}>
        </Grid2>
      </Grid2>
    </Fragment>
  );
}

// function handleAddClick(e: any) {
//   e.preventDefault();
//   this.navigate('home');
//   e.stopPropagation();
// }

const notesStyle = {
  fontWeight: "bold",
  // marginLeft: "10%",
  marginTop: "0.5%",
  fontSize: "37px"
}

const AddStyle = {
  fontWeight: "bold",
  // marginLeft: "10%",
  marginTop: "15%",
  fontSize: "40px"
}

export default App;
