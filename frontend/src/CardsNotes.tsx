
// import { Fragment } from 'react';
import { INotes } from './interfaces';
import { Button, CardActions, CardContent, Chip, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Fragment } from 'react';
import './cards.css'

function CardsNotes(props: { notes: INotes[] | [] }) {

    return <div className='cards'>
        {props.notes.map((note: INotes) => {
            return <div className='rowC' key={note.id}>
                <CardContent >
                    <Typography variant="h5" component="div">
                        {note.Title}
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

            </div>
        })
        }
    </div>
}

export default CardsNotes;
