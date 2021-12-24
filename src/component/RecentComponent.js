import { store } from '../state/store'
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';

function RecentComponent(){
    // Get current state from store
    const recentSearch = store.getState().search.arr.reverse();
    const renderRecent = recentSearch.map(i=>
        <ListItem 
            secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <ClearOutlinedIcon />
            </IconButton>
          }>
            <ListItemText
            primary={i}
            />

        </ListItem>);

    return (
        <Grid>
            <List>
                {renderRecent}
            </List>
        </Grid>
  );
}

export default RecentComponent;