import React from 'react';

export default function Comment({ author, timeAgo, commentBody, imgSrc }) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={imgSrc} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">Today at {timeAgo}</span>
        </div>
        <div className="text">{commentBody}</div>
        <div className="actions">
          <a href="/" className="reply">
            Reply
          </a>
        </div>
      </div>
    </div>
  );
}
