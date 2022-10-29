import React, { useState, useRef } from 'react';
import { Typography, TextField, Button, OutlinedInput } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { commentPost } from '../../actions/posts';

const CommentSection = ({ post }) => {
  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState('');
  const user = JSON.parse(localStorage.getItem('profile'))
  const classes = useStyles();
  const dispatch = useDispatch();
  const commentsRef = useRef();
  
  const handleClick = async () => {
    const finalComment = `${user.result.name}: ${comment}`;

    const newComments = await dispatch(commentPost(finalComment, post._id));

    setComments(newComments);
    setComment('');

    commentsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className={classes.commentsOuterContainer}>
        <Typography gutterBottom variant="h6">Comments</Typography>
        <div className={classes.commentsInnerContainer}>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
             <strong>{c.split(': ')[0]}</strong>
             {c.split(':')[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </div>
      </div>
        {user?.result?.name && (
          <div>
            <Typography gutterBottom variant="h6">Write a Comment</Typography>
            <TextField
              fullWidth
              minRows={4}
              variant="outlined"
              label="Comment"
              multiline
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button style={{ marginTop: '10px' }} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
              Post Comment
            </Button>
          </div>
        )}
    </div>
  );
};

export default CommentSection;
