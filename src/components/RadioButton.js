import React, { Component } from 'react';

class RadioButton extends Component {
    constructor(props){
        super(props)
        this.state = {
            checked: this.props.beChecked ? true : false
        }
    }

    radioButtonChange(e){
        if (this.state.checked) {
            this.setState({
                checked: false
            }, this.completeAction());

        } else {
            this.setState({
                checked: true
            }, this.completeAction());
        }
    }

    completeAction(e){
    //When this is called, state.checked wouldn't have been set yet, so we must
    //do the opposite
        if (this.props.hasActions) {
            e.preventDefault();
            if (!this.state.checked) {
                this.props.positiveAction();
            } else {
                this.props.negativeActions();
            }
        }
    }

    render() {

        return(
            <label>
                <input type="radio" name="optionsRadios" checked={this.state.checked} onClick={this.radioButtonChange}/>
                <span className="circle"/>
                <span className="check"/>
                {this.props.label}
            </label>

        );
    }
}

export default RadioButton;
