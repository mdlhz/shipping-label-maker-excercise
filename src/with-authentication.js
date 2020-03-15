import React from 'react';

export default function withAuthentication(WrappedComponent) {
  class WithAuthentication extends React.Component {
    constructor() {
      super();
      this.state = {
        data: [],
        loading: true,
        error: '',
      };
    }

    async componentDidMount() {
      try {
        const user = await fetch(this.props.dbUsers);
        const userJSON = await user.json();

        if (userJSON) {
          this.setState({
            data: userJSON,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }

    render() {
      const { data, loading, error } = this.state;

      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  WithAuthentication.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithAuthentication;
}
