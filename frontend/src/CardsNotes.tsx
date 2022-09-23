
// import { Fragment } from 'react';
import { INotes } from './interfaces';
import { CardActions, CardContent, Chip, Typography } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import './cards.css'
import Grid2 from '@mui/material/Unstable_Grid2';
import * as Axios from './api';
import { ToastContainer, toast } from 'react-toastify';

function CardsNotes(props: { notes: INotes[] | [], refresh?: any }) {
    return <div className='cards'>
        {props.notes.map((note: INotes) => {
            return <span className={new Date(note.DueDate) > new Date() ? "rowC" : "rowCoverdue"} key={note.id}>
                <CardContent >
                    <Typography variant="h5" component="div">
                        <Grid2 container spacing={1}>
                            <Grid2 xs={11}>
                                {note.Title}
                            </Grid2>

                            <Grid2 xs={1}>
                                <DeleteSweepIcon fontSize="small" data-testid="DeleteIcon" className='deleteIcon' onClick={() => deleteNote(note)} />
                            </Grid2>
                        </Grid2>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {note.Description}
                    </Typography>
                    <Typography variant="body2">
                        <b>Tags:</b>
                        <>{note.Tags.map((tag) => {
                            return <Chip label={tag} variant="outlined" key={tag} className='chips' /> //<Fragment key={tag}>{tag + " "}</Fragment>
                        })}</>
                    </Typography>
                </CardContent>
                <CardActions>
                    {/* <svg fontSize="small" data-testid="DeleteIcon" style={deleteincon} /> */}
                </CardActions>
                <ToastContainer />
            </span>
        })
        }
    </div>

    async function deleteNote(item: INotes) {
        try {
            let response = await Axios.deletetData(`/notes/${item.id}`);
            props.refresh();
        } catch (err) {
            console.error(`Some error occured while deleting ${item.id}, error: `, err);
            toast.error('Some error occured!!!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }
}


export default CardsNotes;
