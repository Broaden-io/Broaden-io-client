import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import ActionConfirmDeleteModal from './ActionConfirmDeleteModal'

// Hi Ansel!

class Action extends Component {

constructor(props) {
  super(props)
  this.state = {
    confirmDelete: false
  }
}

  renderImage(image) {
    if (image) {
      if (image.url) {
        return (
          <img src={image.url} alt=""/>
        )
      }
    } else {
      return " "
    }
  }

  renderType(type) {
    if (type) {
      if (type.startsWith('video')) {
        return (
          <button type="button" rel="tooltip" data-placement="left" title="Video" className="btn btn-link" data-original-title="Video">
            <i className="material-icons">ondemand_video</i>
          </button>
        )
      } else if (type.startsWith('music')) {
        return (
          <button type="button" rel="tooltip" data-placement="left" title="Music" className="btn btn-link" data-original-title="Music">
            <i className="material-icons">music_note</i>
          </button>
        )
      } else if (type.startsWith('article')) {
        return (
          <button type="button" rel="tooltip" data-placement="left" title="Article" className="btn btn-link" data-original-title="Article">
            <i className="material-icons">assignment</i>
          </button>
        )
      } else if (type.startsWith('book')) {
        return (
          <button type="button" rel="tooltip" data-placement="left" title="Book" className="btn btn-link" data-original-title="Book">
            <i className="material-icons">book</i>
          </button>
        )
      } else if (type.startsWith('profile')) {
        return (
          <button type="button" rel="tooltip" data-placement="left" title="Profile" className="btn btn-link" data-original-title="Profile">
            <i className="material-icons">face</i>
          </button>
        )
      }
    } else {
      return (
        <button type="button" rel="tooltip" data-placement="left" title="Web" className="btn btn-link" data-original-title="Web">
          <i className="material-icons">explore</i>
        </button>
      )
    }
  }


  renderDeleteButton() {
    const { rubricOwner, data } = this.props
    const { userId: creatorId } = data
    const userId = parseInt(localStorage.getItem('userId'), 10)
    if ((userId === creatorId) || (userId === rubricOwner)) {
      return (
        <button onClick={() => {this.setState({confirmDelete: true})}} type="button" rel="tooltip" data-placement="left" title="delete" className="btn btn-link" data-original-title="Remove item">
          <i className="material-icons">delete</i>
        </button>
      )
    } else {
      return null
    }
  }

  toggleConfirmDeleteOn() {
    this.setState({confirmDelete: true})
  }

  toggleConfirmDeleteOff() {
    this.setState({confirmDelete: false})
  }

  render() {
    const { data: action } = this.props
    const { customTitle, url, meta, User } = action
    const { ogTitle, ogDescription, ogType } = meta ? meta : {ogTitle: '', ogDescription: '', ogType: ''}
    const renderedUserName = User ? User.username : 'broaden user'

    return(
      <tr>
        {/*<td className="td-number ">
        <div className="btn-group btn-group-sm">
        <button className="btn btn-round btn-info btn-xs"> <i className="material-icons">arrow_upward</i> </button>
        <button className="btn btn-round btn-info btn-xs"> <i className="material-icons">arrow_downward</i> </button>
      </div>
    </td>*/}
    <td className="td-name">

      <a href={url} target="_blank">
      <h5>
        <small>
          {customTitle ? customTitle : (ogTitle ? ogTitle : url) }
        </small>
      </h5>
      </a>

    </td>
    <td className="td-description">
      <p>{ogDescription ? ogDescription : "" }</p>
    </td>
    <td className="td-name">
      <Link to={`/u/${User.username}`}>

      <h5>
        <small>
          {/* {ogTitle ? ogTitle : null } */}
          { renderedUserName }
        </small>
      </h5>
    </Link>
  </td>
  <td className="td-actions">
    {this.renderType(ogType)}
  </td>
  <td className="td-actions">
    {this.renderDeleteButton()}
    <ActionConfirmDeleteModal
      isVisible={this.state.confirmDelete}
      toggle={this.toggleConfirmDeleteOff.bind(this)}
      action={action} />
  </td>
</tr>
)
}
}

export default withRouter(connect()(Action))
