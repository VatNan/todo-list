import React, { Component } from 'react';
import { SyncLoader } from 'react-spinners';
import './styles/withLoader.css';

const withLoader = loadingKey => WrapperComponent => (
  class extends Component {
    render() {
      if (this.props[loadingKey]) {
        return (
          <div className="with-loader-load">
            <SyncLoader
              color="rgb(54, 215, 183)"
              loading={this.props[loadingKey]}
            />
          </div>
        );
      } else {
        return <WrapperComponent {...this.props} />;
      }
    }
  }
);

export default withLoader;
