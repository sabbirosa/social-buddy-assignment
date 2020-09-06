import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 600,
        margin: 'auto',
        marginTop: '20px',

    },
}));

const Post = (props) => {
    const { id, title, body } = props.post;


    const classes = useStyles();


    return (

        <Card className={classes.root}>
            <CardHeader

                title={title.toUpperCase()}

            />
            
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                
                <Button>
                    <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}>SEE MORE</Link>
                </Button>

            </CardActions>

        </Card>

    );

};

export default Post;