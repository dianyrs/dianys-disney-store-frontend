import React, {Component} from 'react';
import encanto from '../encanto.png';

class Success extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={encanto} className="encanto-logo"/>
                </div>
                <br/>
                <div className="success-signal disney-font"
                    style={{
                        border: "none",
                        width: "120",
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "purple",
                        color: "white",
                        fontWeight: "700",
                    }}
                ><div><h1 className="font-size: 250%"> Successfull!!</h1></div>
                </div>
                <br/>
                <div>
                    <p className="message-success">Your order is being prepared.</p>
                </div>
                <div>
                    <p className="message-success">Thanks for choosing Diany Disney Store</p>
                </div>
            </div>
        );
    }
}

export default Success;