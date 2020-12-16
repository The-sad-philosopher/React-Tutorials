import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './components/Comment';
import ApprovalCard from './components/ApprovalCard';
import faker from 'faker';

const App = () => {
  const randomName = () => faker.name.firstName();
  const avatarSize = [150, 150];
  return (
    <div className="ui container comments">
      <h3 className="ui dividing header">Comments</h3>
      <ApprovalCard>
        <Comment
          author={randomName()}
          timeAgo="3.00PM"
          commentBody="Amazing post!"
          imgSrc={faker.image.fashion(...avatarSize)}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author={randomName()}
          timeAgo="6.40PM"
          commentBody="Great write up, mate."
          imgSrc={faker.image.nature(...avatarSize)}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          author={randomName()}
          timeAgo="9.30PM"
          commentBody="Nice blog post!"
          imgSrc={faker.image.city(...avatarSize)}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h3>Warning!</h3>
          <p>Are you sure you want to do this?</p>
        </div>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept();
}
