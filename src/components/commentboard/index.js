import React from 'react';
import commentBox from 'commentbox.io';


class PageWithComments extends React.Component {

    componentDidMount() {

        this.removeCommentBox = commentBox('my-project-id');
    }

    componentWillUnmount() {

        this.removeCommentBox();
    }

    render() {

        return (
            <div className="commentbox" />
        );
    }
}
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Com() {
  return (
    <div> <div class="commentbox">nignog</div>
</div>
  );
}

export default Com;

