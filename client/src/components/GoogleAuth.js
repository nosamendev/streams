import React from 'react';

class GoogleAuth extends React.Component {
    state = {isSignedIn: null};

    /*
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clentId: '627709479779-1b5dv56db7f3if6qjnijmcfb6m8b64uo.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    */
    componentDidMount() {
        //!!!!
        this.setState({isSignedIn: true});
    }
    
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    /*
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
    */
    renderAuthButton(){
        if (this.state.isSignedIn === null) {
            return null;
        } else {
            if (this.state.isSignedIn) {
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

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

export default GoogleAuth;