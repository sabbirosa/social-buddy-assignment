import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

const PostComment = (props) => {

    const classes = useStyles();

    const { body, email, name, } = props.comment;

    const [user, setUser] = useState([]);

    useEffect(() => {
        const url = 'https://randomuser.me/api/'
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data.results))

    }, [])

    return (

        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    {
                        user.map(user => {
                            return (
                                <Avatar src={user.picture.thumbnail} alt="user" />
                            )
                        })
                    }
                </ListItemAvatar>
                <ListItemText
                    primary={name.toUpperCase()}

                    secondary={
                        <React.Fragment>
                            <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                <Typography>
                                    <small>{email}</small>
                                </Typography>
                            </Typography>
                            <Typography>
                                {body}
                            </Typography>


                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />

        </List>


    );
};

export default PostComment;