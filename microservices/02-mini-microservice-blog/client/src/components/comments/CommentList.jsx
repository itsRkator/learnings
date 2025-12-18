const CommentList = ({ postComments }) => {
  const renderedComments = postComments.map((comment) => (
    <li key={comment.id}>
      {comment.status === 'approved'
        ? comment.content
        : comment.status === 'pending'
        ? 'This comment is being processed'
        : 'This comment has been rejected'}
    </li>
  ));

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
