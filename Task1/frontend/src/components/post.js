import React from 'react';
import '../assets/css/post.css'

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-author">
          <img src="https://i.pravatar.cc/150?img=3" alt="Marina Valentine" />
          <p>
          <span className="post-author-name">Marina Valentine</span>
          <span className="post-author-badge">Pro Member</  span>
          <span>replied to the topic</span>
          <span className="post-topic"> Welcome to the Cosplayers Group Forum!</span>
          <span> in the forum</span>
          <span className="post-forum"> Cosplayers Group Forum</span>
          <br></br>
          <span className="post-time">1 year ago</span>
          </p>
        </div>
      </div>
      <div className="post-content">
        <p>Hello Everyone!</p>
      </div>
      <hr/>
      <div className="post-footer row" >
        <div className="post-reactions col-2">
        <span >😂</span>
        <span className='pl-2'>5</span>
        </div>
        <div className='col-5'></div>
        <div className="post-comments col-3">
          <span className='font-weight-bold'>0 Comments</span>
        </div>
        <div className="post-shares col-2">
          <span className='font-weight-bold'>0 Shares</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
