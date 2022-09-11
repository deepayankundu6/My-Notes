import { Fragment } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from "react-router-dom";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

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

            <Grid2 container spacing={5}>
                <Grid2 xs={1}>
                </Grid2>
                <Grid2 xs={10}>
                    <form className="mui-Form" onSubmit={(e) => { handelSubmit(e) }}>
                        <TextField style={descriptionStyle} id="standard-basic" label="Title" variant="standard" /><br />
                        <TextField multiline style={descriptionStyle} id="standard-basic" label="Description" variant="standard" /><br />
                        <TextField style={descriptionStyle} variant="standard" label="Tags" /> <br /> <br /> <br />
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DateTimePicker renderInput={(props) => <TextField style={datePickerStyle} {...props} />} label="Due Date" value={new Date()} onChange={(newValue) => { }} />
                        </LocalizationProvider>
                    </form>
                </Grid2>

                <Grid2 xs={1}>
                </Grid2>

            </Grid2>
        </Fragment>
    );

    function handelSubmit(e: any) {
        e.preventDefault()
    }
}

const notesStyle = {
    fontWeight: "bold",
    marginTop: "0.5%",
    marginLeft: "40%",
    fontSize: "37px"
}
const datePickerStyle = {
    // fontWeight: "bold",
    marginTop: "1%",
    // marginLeft: "40%",
    fontSize: "37px",
    width: "35%",
}
const descriptionStyle = {
    // fontWeight: "bold",
    marginTop: "1%",
    // marginLeft: "40%",
    fontSize: "37px",
    width: "100%",
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
