import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

export default class SearchInput extends React.Component{

    showHistory = () => {
        this.props.showHistory = true
    }
  
    render(){
        return (
            <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1 }}
            >
            <InputBase
                id='autocomplete'
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton onClick={this.props.handler} sx={{ p: '10px' }} aria-label="directions">
                <HistoryOutlinedIcon />
            </IconButton>
            </Paper>
        );
    }
}

