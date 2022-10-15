import { Fragment, useEffect, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate, useParams } from "react-router-dom";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { INotes } from './interfaces';
import * as APIMethods from './api';

function EditDialogue() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const { id } = useParams();

    useEffect(() => {
        getNotesDetails();
    }, [])

    return (
        <Fragment>
            <Grid2 container spacing={1}>
                <Grid2 xs={1}>
                    <ClearIcon style={ClearStyle} className="md-2 sd-2" onClick={() => navigate("/")} />
                </Grid2>
                <Grid2 xs={10}>
                    <div className="md-10 sd-10" style={notesStyle} > Edit note </div>
                </Grid2>

                <Grid2 xs={1}>
                    <DoneIcon style={DoneStyle} className="md-2 sd-2" onClick={() => { saveNotes() }} />
                </Grid2>

            </Grid2>

            <Grid2 container spacing={5}>
                <Grid2 xs={1}>
                </Grid2>
                <Grid2 xs={10}>
                    <form className="mui-Form" onSubmit={(e) => { handelSubmit(e) }}>
                        <TextField style={descriptionStyle} id="Notes-Title" label="Title" variant="standard" onChange={(e: any) => setTitle(e.target.value)} value={title} /><br />
                        <TextField multiline style={descriptionStyle} id="Notes-Description" label="Description" variant="standard" onChange={(e: any) => setDescription(e.target.value)} value={description} /><br />
                        <TextField style={descriptionStyle} placeholder="Add tags separated by ;" id="Notes-Tags" variant="standard" label="Tags" onChange={(e: any) => setTags(e.target.value)} value={tags} /> <br /> <br /> <br />
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DateTimePicker renderInput={(props) => <TextField style={datePickerStyle} {...props} />} label="Due Date" value={dueDate} onChange={(e: any) => { setDueDate(e.$d.toString()) }} />
                        </LocalizationProvider>
                    </form>
                </Grid2>

                <Grid2 xs={1}>
                </Grid2>

            </Grid2>
            <ToastContainer />
        </Fragment>
    );

    function handelSubmit(e: any) {
        e.preventDefault();
        saveNotes();
    }

    function saveNotes() {
        let payload: INotes;
        if (title && description && tags && dueDate) {
            payload = {
                Title: title,
                Description: description,
                Tags: getTags(tags),
                DueDate: dueDate.toString(),
                SavedDate: new Date().toString(),
                done: false
            }
            APIMethods.patchtData('/app/note/update/' + id, payload).then(({ data }) => {
                if (data.acknowledged) {
                    toast.success('Note notes successfully', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    ResetForm();
                } else {
                    toast.error('Some error occured!!!', {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                // navigate("/");
            }).catch(err => {
                console.log("Some error occured while saving the notes: ", err);
                toast.error('Some error occured!!!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            })

        } else {
            toast.warning('Please add all the fields!!!', {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        function ResetForm() {
            setTitle("");
            setDescription("");
            setDueDate(new Date());
            setTags("");
        }

    }

    function getNotesDetails() {

        APIMethods.getData("app/note/details/" + id).then(({ data, status }) => {
            console.log(data)
            console.log(data.Tags.join(";"))
            if (data) {
                setTitle(data.Title);
                setDescription(data.Description);
                setDueDate(new Date(data.DueDate));
                setTags(data.Tags.join(";"));
            } else {
                toast.error('Some error occured!!!', {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        }).catch(err => {
            console.log("Some error occured while getting the notes: ", err);
            toast.error('Some error occured!!!', {
                position: toast.POSITION.TOP_RIGHT
            });
        })
    }
}

function getTags(data: string) {
    let tags = data.split(";");
    tags = tags.filter((el: string) => el)
    return tags;
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
    fontSize: "40px",
    cursor: "pointer"
}

const DoneStyle = {
    fontWeight: "bold",
    // marginLeft: "10%",
    marginTop: "15%",
    fontSize: "40px",
    cursor: "pointer"
}

export default EditDialogue;
