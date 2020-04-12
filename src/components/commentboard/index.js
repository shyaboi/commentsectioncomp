import React from 'react';
import commentBox from 'commentbox.io';

class Com extends React.Component {

  componentDidMount() {

      this.removeCommentBox = commentBox('my-project-id');
  }

  componentWillUnmount() {

      this.removeCommentBox();
  }

  render() {

      return (
        <div id='con'>
          <div id='com' className="commentbox" />
          </div>
      );
  }
}

export default Com;

