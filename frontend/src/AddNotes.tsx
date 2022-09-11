import { Fragment } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from "react-router-dom";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function AddDialogue() {
    const navigate = useNavigate();
    return (
        <Fragment>
            <Grid2 container spacing={1}>
                <Grid2 xs={1}>
                    <ClearIcon style={ClearStyle} className="md-2 sd-2" onClick={() => navigate("/")} />
                </Grid2>
                <Grid2 xs={10}>
                    <div className="md-10 sd-10" style={notesStyle} > Add new note </div>
                </Grid2>

                <Grid2 xs={1}>
                    <DoneIcon style={DoneStyle} className="md-2 sd-2" onClick={() => navigate("/")} />
                </Grid2>

            </Grid2>
        </Fragment>
    );
}

const notesStyle = {
    fontWeight: "bold",
    marginTop: "0.5%",
    marginLeft: "40%",
    fontSize: "37px"
}

const ClearStyle = {
    fontWeight: "bold",
    marginTop: "15%",
    marginLeft: "40%",
    fontSize: "40px"
}

const DoneStyle = {
    fontWeight: "bold",
    // marginLeft: "10%",
    marginTop: "15%",
    fontSize: "40px"
}

export default AddDialogue;
