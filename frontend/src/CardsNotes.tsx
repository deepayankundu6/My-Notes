
// import { Fragment } from 'react';
import { INotes } from './interfaces';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
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
                        Tags:
                        <>{note.Tags.map((tag) => {
                            return <Fragment key={tag}>{tag + " "}</Fragment>
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
