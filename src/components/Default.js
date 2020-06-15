import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-capitalize pt-5">
                        <h1>404 error</h1>
                        <h5>page not found</h5>
                        <h5>
                            the requested URL <span className="text-danger">
                                { this.props.location.pathname }
                            </span>{" "} was not found
                        </h5>
                    </div>
                </div>
        
            </div>
        );
    }
}

export default Default;