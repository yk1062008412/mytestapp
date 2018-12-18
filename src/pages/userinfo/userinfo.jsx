import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <React.Fragment>
                here is user: {this.props.match.params.userid}'s userpage.
            </React.Fragment>
        );
    }
}
 
export default UserInfo;