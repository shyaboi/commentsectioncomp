import React from 'react';
import logo from './logo.svg';
import './App.css';
import Com from './components/commentboard';
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


export default PageWithComments;
