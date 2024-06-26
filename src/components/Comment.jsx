import React from 'react';

function Comment({ user, content }) {
  return (
    <div className="comment">
      <div className="comment-header">
        <div className="user-icon">{user && user.charAt(0)}</div>
        <div className="user-name">{user || 'User'}</div>
      </div>
      <div className="comment-content">{content}</div>
    </div>
  );
}

export default Comment;
