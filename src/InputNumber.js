import React from "react";
import {InputNumber} from "antd"
import 'antd/dist/antd.css';

export default class InputNumber1 extends React.Component {
    state = {
        value: 0
    }
    onValueChange = (value) => {
        this.setState({value});
    }

    onKeyDown = (e, ...args) => {
        const {value} = this.state;
        if (e.keyCode === 40) {
            if (e.shiftKey) {
                e.preventDefault();
                this.setState({value: value - 25});
            }
        }
    }
    render() {
        return (
            <InputNumber value={this.state.value} onChange={this.onValueChange} onKeyDown={this.onKeyDown}/>
        );
    }
}