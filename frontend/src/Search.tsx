import { TextField } from "@mui/material";
import { Fragment, useMemo, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { debouncedFunction } from './debounce';

function Search(props: { searchFunction: any }) {

    // const [searchTerms, setSearchTerms] = useState('')

    const memofunction = useMemo(() => { return debouncedFunction(props.searchFunction) }, [])
    return (
        <Fragment>
            <div style={searchStyle}>
                <SearchIcon style={searchIcon} />
                <TextField id="search" label="Search" variant="standard" style={searchField} onChange={handleSearch} />
            </div>
        </Fragment>
    );

    function handleSearch(e: any) {
        // setSearchTerms(e.target.value);
        memofunction(e.target.value)
    }
}

const searchStyle = {
    // marginLeft: "10%",
}

const searchIcon = {
    marginTop: "1.2%",
    marginRight: "0.5%",
    height: 40
}

const searchField = {
    width: "97%",
    height: 40
}

export default Search;