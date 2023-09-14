import React from "react";
import { ReactAdapterProvider } from './ReactAdapterProvider';

// ReactAdapterProvider renders the component using ReactDOM.render - essentially loading in react 16 way.
export const createAdaptedComponent = (ModernReactComponent) => {
    return React.forwardRef((props, ref) => {
        return <ReactAdapterProvider {...props} component={ModernReactComponent} ref={ref} />;
    });
};