import React, { Component } from 'react';
import mixpanel from 'mixpanel-browser';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'

class Criterion extends Component {

    componentDidMount() {

    }

    render() {
        const { id, text, level, answer, Actions: actions } = this.props.data
        return(
            <tr>
                <td>
                    <div className="checkbox" >
                        <label >
                            <input type="checkbox" name="optionsCheckboxes" />
                        </label>
                    </div>
                </td>
                <td>{text}</td>
                <td className="text-right">
                    {level === 1 ? `${level} pt` : `${level} pts`}
                </td>
            </tr>
        );
    }
}

export default withRouter(connect()(Criterion))
