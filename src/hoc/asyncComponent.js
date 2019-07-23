import React, { Component } from 'react';

// asynchronously => only when it's needed

// importComponent is a function
const asyncComponent = (importComponent) => {
    return class extends Component {
        state = {
            // will be set to dynamically loaded component
            component: null
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;