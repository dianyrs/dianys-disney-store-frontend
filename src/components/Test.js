import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    state = {
        test_data: {}
    }

    componentDidMount() {
        axios.get('http://localhost:3001')
            .then(res => {
                this.setState({test_data: res.data});
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render() {
        if (this.state.test_data && this.state.test_data.success) {
            return (
                <div>The connection with the API was successful. The message is: <b>{this.state.test_data.message}</b></div>
            );
        }

        return (
            <div>We were unable to connect with the API</div>
        )
    }
}

export default Test;
