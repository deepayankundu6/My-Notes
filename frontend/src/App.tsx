import AddIcon from '@mui/icons-material/Add';
import { Fragment } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Search from './Search';

function App() {
  return (
    <Fragment>
      <Grid2 container spacing={1}>
        <Grid2 xs={1}>
        </Grid2>
        <Grid2 xs={10}>
          <div style={notesStyle} className="md-10 sd-10"> Notes </div>
        </Grid2>

        <Grid2 xs={1}>
          <AddIcon style={AddStyle} className="md-2 sd-2" />
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

const notesStyle = {
  fontWeight: "bold",
  // marginLeft: "10%",
  marginTop: "2%",
  fontSize: "37px"
}

const AddStyle = {
  fontWeight: "bold",
  // marginLeft: "10%",
  marginTop: "15%",
  fontSize: "40px"
}

export default App;
