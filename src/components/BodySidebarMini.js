import React from 'react'

class BodySidebarMini extends React.Component {

  componentDidMount() {
    document.body.classList.toggle('sidebar-mini', this.props.sidebarIsMini)
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('sidebar-mini', nextProps.sidebarIsMini)
  }
  componentWillUnmount() {
    document.body.classList.remove('sidebar-mini')
  }
  render() {
    return this.props.children
  }
}

export default BodySidebarMini;
