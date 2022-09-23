
// import { Fragment } from 'react';
import { INotes } from './interfaces';
import { CardActions, CardContent, Chip, Typography } from '@mui/material';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import './cards.css'
import Grid2 from '@mui/material/Unstable_Grid2';

function CardsNotes(props: { notes: INotes[] | [] }) {

    return <div className='cards'>
        {props.notes.map((note: INotes) => {
            return <span className='rowC' key={note.id}>
                <CardContent >
                    <Typography variant="h5" component="div">
                        <Grid2 container spacing={1}>
                            <Grid2 xs={11}>
                                {note.Title}
                            </Grid2>

                            <Grid2 xs={1}>
                                <DeleteSweepIcon fontSize="small" data-testid="DeleteIcon" className='deleteIcon' />
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

            </span>
        })
        }
    </div>
}

export default CardsNotes;
