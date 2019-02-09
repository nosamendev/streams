//components/streams/StreamList.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams, deleteStream } from '../../actions';
import history from '../../history';
import Modal from '../Modal';

class StreamList extends React.Component {
    componentDidMount(){
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId ) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        Delete
                    </Link>
                    <button onClick={() => {this.renderModal(stream)}}>Delete</button>
                </div>
            );
        }
    }

    renderList(){
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"></i>
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className="header">
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{textAlign: 'right'}}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            )
        }
    }
    
    renderModal(stream){
        //console.log(stream.id);
        const id=stream.id;
        const content = (!stream)?
            'Are you sure you want to delete this stream':
            `Are you sure you want to delete this stream with Title ${stream.title}`;
            console.log(content);
        const actions = (<div>
            <button onClick={() => {this.props.deleteStream(id)}}>Delete</button>
            <Link to="/">Cancel</Link>
        </div>);
        
        return <Modal title="Delete Stream" content={content} actions={actions} onDismiss={() => {history.push('/')}} />;
    }

    render(){
        //console.log(this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                {this.renderCreate()}
            </div>
        );
    }
    
}
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        //tova e vgradeno i pravi masiv ot values na object
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
    
}

export default connect(mapStateToProps,{ fetchStreams, deleteStream })(StreamList);

