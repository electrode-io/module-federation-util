import React from 'react';

class ReactAdapterConsumer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Component: () => null };
    const { loadRemoteComponent } = this.props;
    
    this.RemoteComponent = React.lazy(() => {
      return loadRemoteComponent().then( ({ AdaptedComponent }) => {
        return { default: AdaptedComponent };
      })
    });
  }

  render() {
    return (
      <React.Suspense fallback={this.props.fallback || 'loading'}>
        <this.RemoteComponent {...this.props} />
      </React.Suspense>
    );
  }
}

export { ReactAdapterConsumer };
