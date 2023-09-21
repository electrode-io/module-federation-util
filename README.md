# Mixed React Versions and Compatibility levels
This is a utility to help with loading federated apps that uses different react versions

# Usage

Install the package in both shell remote apps
````bash
npm install @xarc/module-federation-util --save
````

## In Shell app
```javascript
...
import { ReactAdapterConsumer } from '@xarc/module-federation-util';

const App = (props) => {
  return (
    <ReactAdapterConsumer 
      fallback={<Spinner />}
      loadRemoteComponent={() => import('subapp/ModernComponent')}
      // any other props, passed to ModernComponent
      // {...this.state}
      >
      <h3>And these are children passed into it from the legacy app</h3>
    </ReactAdapterConsumer>
  )
}
````

## In Remote app

````javascript
import React, { useEffect } from 'react';
import { createAdaptedComponent } from '@xarc/module-federation-util';

const ModernReactComponent = props => {
  const { children, input } = props;
  return (
    <div>
      <p>
        A component with Hooks in remote app; Uses Adapter and gets loaded in shell even though host uses older react version.
      </p>
      {children}
    </div>
  );
};

export const AdaptedComponent = createAdaptedComponent(ModernReactComponent);

export default ModernReactComponent;

````

### Module Federation configuration for remote app 

````javascript
...
exposes: {
    './ModernComponent': './components/ModernReactComponent'
  },
...
````
