import { TextField } from "@mui/material";
import { Fragment } from "react";
import SearchIcon from '@mui/icons-material/Search';

function Search() {
    return (
        <Fragment>
            <div style={searchStyle}>
                <SearchIcon style={searchIcon} />
                <TextField id="search" label="Search" variant="standard" style={searchField} />
            </div>
        </Fragment>
    );
}

const searchStyle = {
    marginLeft: "8.5%",
}

const searchIcon = {
    marginTop: "2%",
    marginRight: "0.5%",
}

const searchField = {
    width: "97%", height: 40
}


export default Search;