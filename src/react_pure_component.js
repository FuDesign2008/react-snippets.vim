import React from 'react'

class ComponentName extends React.PureComponent {

  static defaultProps = {
    // TODO
  }

  constructor(props) {
    super(props)

    this.state = {
      // TODO
    }
  }

  render() {
    return (<div />)
  }

  // Lifecycle Methods

  // componentDidMount() {}
  // componentDidUpdate(prevProps, prevState, snapshot) {}
  // componentWillUnmount() {}

  // Rarely Used Lifecycle Methods

  // static getDerivedStateFromProps(props, state) {}
  // shouldComponentUpdate(nextProps, nextState) {}
  // getSnapshotBeforeUpdate(prevProps, prevState) {}

  // Error boundaries
  // static getDerivedStateFromError(error) {}
  // componentDidCatch(error, info) {}

  // Legacy Lifecycle Methods
  // UNSAFE_componentWillMount() {}
  // UNSAFE_componentWillReceiveProps(nextProps) {}
  // UNSAFE_componentWillUpdate(nextProps, nextState) {}
}

export default ComponentName
