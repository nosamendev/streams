import React from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    //state = {isSignedIn: null};

    
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '627709479779-1b5dv56db7f3if6qjnijmcfb6m8b64uo.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange(this.auth.isSignedIn.get());
=======

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clentId: '627709479779-1b5dv56db7f3if6qjnijmcfb6m8b64uo.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
>>>>>>> f54e23e0d6ba0471f33cae92b5ff706238fc6309
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    
<<<<<<< HEAD
    /*
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }
    */

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton(){
        if (this.props.isSignedIn === null) {
            return null;
        } else {
            if (this.props.isSignedIn) {
                return (
                    <button onClick={this.onSignOutClick} className="ui red google button">
                        <i className="google icon"/>
                        Sign out
                    </button>
                );
            } else {
                return (
                    <button onClick={this.onSignInClick} className="ui red google button">
                        <i className="google icon"/>
                        Sign in with Google
                    </button>
                );
            }
        }
    }
=======
    
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null) {
            return <div>I do not know if I am signed in</div>
        } else {
            if (this.state.isSignedIn) {
                return <div>I am signed in</div>
            } else {
                return <div>I am not signed in</div>;
            }
        }
    }
   
>>>>>>> f54e23e0d6ba0471f33cae92b5ff706238fc6309

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

<<<<<<< HEAD
const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}

export default connect(
    mapStateToProps,
    {signIn, signOut}
)(GoogleAuth);
=======
export default GoogleAuth;
>>>>>>> f54e23e0d6ba0471f33cae92b5ff706238fc6309
