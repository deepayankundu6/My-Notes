
// import { Fragment } from 'react';
import { INotes } from './interfaces';
import { CardActions, CardContent, Chip, Typography } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import './cards.css'
import Grid2 from '@mui/material/Unstable_Grid2';
import * as Axios from './api';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CardsNotes(props: { notes: INotes[] | [], refresh?: any }) {
    const navigate = useNavigate();
    return <div className='cards'>
        {props.notes.map((note: INotes) => {
            return <span className={"rowC"} key={note._id}>
                <CardContent >
                    <Typography variant="h5" component="span">
                        <Grid2 container spacing={1}>
                            <Grid2 xs={11} onClick={() => navigate('edit/' + note._id)} style={titleStyle}>
                                {note.Title}
                            </Grid2>

                            <Grid2 xs={1}>
                                <DeleteSweepIcon fontSize="small" data-testid="DeleteIcon" className='deleteIcon' onClick={() => deleteNote(note)} />
                            </Grid2>
                        </Grid2>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" component={'span'}>
                        {note.Description}
                    </Typography>
                    <Typography variant="body2" component={'span'}>
                        <br /><b>Tags:</b>
                        <>{note.Tags.map((tag) => {
                            return <Chip label={tag} variant="outlined" key={tag} className='chips' /> //<Fragment key={tag}>{tag + " "}</Fragment>
                        })}</>
                    </Typography>
                    <Typography variant="body2" component={'span'}>
                        <br />   <b >Due Date:</b> <span className={new Date(note.DueDate) > new Date() ? "duedate" : "overduedate"}> {new Date(note.DueDate).toDateString() + ' ' + new Date(note.DueDate).toLocaleTimeString()}</span>
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <svg fontSize="small" data-testid="DeleteIcon" style={deleteincon} /> */}
                </CardActions>
                <ToastContainer />
            </span>
        })
        }
    </div >

    async function deleteNote(item: INotes) {
        try {
            let response = await Axios.deletetData(`/app/note/delete/${item._id}`);
            props.refresh();
        } catch (err) {
            console.error(`Some error occured while deleting ${item._id}, error: `, err);
            toast.error('Some error occured!!!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

}

const titleStyle = {
    cursor: "pointer"
}

export default CardsNotes;
