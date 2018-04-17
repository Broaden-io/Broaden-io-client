import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

class Action extends Component {

  state = {
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
  
  render() {
    const { customTitle, url, meta, User} = this.props.data
    const { ogTitle, ogDescription, ogType } = meta
    const firstName = '', lastName = '', username = ''
    if (User) {
      const { firstName, lastName, username } = User
    }
    const renderedUserName = ((firstName === "") || (lastName === "")) ? username : `${firstName} ${lastName}`;

    return(
      <tr>

        <td className="td-number ">
          <div className="btn-group btn-group-sm">
            <button className="btn btn-round btn-info btn-xs"> <i className="material-icons">arrow_upward</i> </button>
            <button className="btn btn-round btn-info btn-xs"> <i className="material-icons">arrow_downward</i> </button>
          </div>
        </td>
        <td className="td-name">
          <h5>
            <small>
              <a href={url} target="_blank">{customTitle ? customTitle : (ogTitle ? ogTitle : url) }</a>
            </small>
          </h5>
        </td>
        <td className="td-name">
          <h6>
            <small>
                {/* {ogTitle ? ogTitle : null } */}
                { renderedUserName }
            </small>
          </h6>
        </td>
        <td className="td-description">
          <p>{ogDescription ? ogDescription : "" }</p>
        </td>
        <td className="td-actions">
          {this.renderType(ogType)}
        </td>
        <td className="td-actions">
          <button type="button" rel="tooltip" data-placement="left" title="" className="btn btn-link" data-original-title="Remove item">
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    )
  }
}

export default withRouter(connect()(Action))
