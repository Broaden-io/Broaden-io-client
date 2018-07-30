import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import uuidv1 from 'uuid/v1'
import { Collapse } from 'react-collapse'
import Action from './Action'
import ActionCreateModal from './ActionCreateModal'

class Criterion extends Component {
  state = {
    isOpen: false,
    isChecked: false,
    AddNewResource: false
  }

  toggleOpen() {
    this.setState({isOpen: !this.state.isOpen})
  }

  toggleCheck() {
    this.setState({isChecked: !this.state.isChecked})
  }

  toggleAddNewRes(e) {
    this.setState({AddNewResource: !this.state.AddNewResource})
  }

  toggleAddNewResOff() {
    this.setState({AddNewResource: false})
  }

  renderName() {
    const { text } = this.props.data
    const { isChecked } = this.state
    if (isChecked) {
      return (
        <h3 className="text-success list-group-item-heading" style={{display: `inline`}}>
          <strike className="text-success">
            <small className="text-success">
              &nbsp;{text}
            </small>
          </strike>
        </h3>
      )
    }
    return (
      <h3 className="list-group-item-heading" style={{display: `inline`}}>
        <small className="text-default">
          &nbsp;{text}
        </small>
      </h3>
    )
  }


  render() {
    const { data, owner } = this.props
    const { level, Actions: actions } = data
    const { isOpen, isChecked } = this.state
    return(
      <ul className="list-group">
        <li className="list-group-item">
          <div className="checkbox" style={{display: `inline`}}>
            <label style={{display: `inline`}}>
              <input
                type="checkbox"
                onClick={this.toggleCheck.bind(this)}
                value={this.isChecked}
                name="optionsCheckboxes"
                style={{display: `inline`}}/>
              {this.renderName()}
            </label>
          </div>
          <span
            className={
              isChecked
                ? `btn btn-success btn-sm btn-round pull-right`
                : `btn btn-sm btn-info btn-simple btn-round pull-right`
            }>
            <h4>
              <strong>
                {level === 1 ? `${level} pt` : `${level} pts`}
              </strong>
            </h4>
          </span>
          <span onClick={this.toggleOpen.bind(this)}>
            <br/>
            <button className="btn btn-primary btn-simple">
              <i className="material-icons">add</i>
              <strong>&nbsp; Level up this skill</strong>
              <div className="ripple-container">
              </div>
            </button>
          </span>
          <Collapse isOpened={isOpen} springConfig={{stiffness: 170, damping: 26}}>
            <div className="row">
              <div className="col-10">
                <div className="table-responsive">
                  <table className="table table-shopping">
                    <thead>
                      <tr>
                        {/*<th className="th-description">Vote</th>*/}
                        <th className="th-description">Name</th>
                        <th className="th-description">Description</th>
                        <th className="th-description">Contributor</th>
                        <th className="th-description">Type</th>
                        <th className="th-description"></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {actions.map(action => <Action key={uuidv1()} data={action} rubricOwner={owner} />)}
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1" style={{display: `inline`}}>
                  <button onClick={this.toggleAddNewRes.bind(this)} className="btn btn-sm btn-default btn-block" style={{display: `inline`}}>
                    <strong>
                      Add a new resource
                    </strong>
                  </button>
                  <ActionCreateModal
                    isVisible={this.state.AddNewResource}
                    toggle={this.toggleAddNewResOff.bind(this)}
                    criterion={this.props.data} />
                </div>
              </div>
            </div>
          </Collapse>
        </li>
      </ul>
    )
  }
}

export default withRouter(connect()(Criterion))
