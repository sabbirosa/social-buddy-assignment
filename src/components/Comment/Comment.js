import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '800px',
        margin: 'auto',
        

    },
    media: {
        height: '250px',
    },
});

const Comment = () => {


    const classes = useStyles();

    const { id } = useParams();

    const [comments, setComments] = useState([]);

    const [post, setPosts] = useState({});

    console.log('clicked post details', post);

    const { title, body } = post;

    useEffect(() => {
        const cmt_url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

        fetch(cmt_url)
            .then(res => res.json())
            .then(data => setComments(data))

    },)

    useEffect(() => {
        const post_url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(post_url)
            .then(res => res.json())
            .then(data => setPosts(data))

    },)



    return (

        <Card className={classes.root}>

            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h1>{title}</h1>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <h2>Post Comments</h2>
            <hr />
            {
                comments.map(comment => <PostComment comment={comment}></PostComment>)
            }
        </Card>

    );
};

export default Comment;