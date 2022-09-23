import AddIcon from '@mui/icons-material/Add';
import { Fragment, useEffect, useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Search from './Search';
import { useNavigate } from "react-router-dom";
import * as APIMethods from './api';
import { ToastContainer, toast } from 'react-toastify';
import CardsNotes from './CardsNotes';
import { INotes } from './interfaces';

function App() {
  const notes: INotes[] | [] = []
  const navigate = useNavigate();
  const [Notes, setNotes] = useState(notes);
  const [Flag, setFlag] = useState(false);

  useEffect(() => {
    GetNotes();
  }, [Flag])

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
      <CardsNotes notes={Notes} refresh={GetNotes} />
      <ToastContainer />
    </Fragment>
  );

  async function GetNotes() {

    try {
      let response = await (await APIMethods.getData("/notes"));
      if (response.data) {
        setNotes(response.data);
        setFlag(!Flag);
      } else {
        console.log("No saved notes found");
        // return [];
      }
    } catch (error) {
      console.error("Some error occured: ", error);
      toast.error('Some error occured while fetching the saved notes!!!!!', {
        position: toast.POSITION.TOP_RIGHT
      });
      // return [];
    }
  }
}

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
  fontSize: "40px",
  cursor: "pointer"
}

export default App;
