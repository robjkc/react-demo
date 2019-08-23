import React, { Component } from 'react';

type MyProps = { increment: number };
type MyState = { count: number };

class BasicCounter extends Component<MyProps, MyState> {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + this.props.increment
        }));
    };

    render() {
        return (
            <React.Fragment>
                <h2>Basic Counter</h2>
                <button onClick={this.handleClick}>{this.state.count}</button>
            </React.Fragment>
        );
    }
}

export default BasicCounter;