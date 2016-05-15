import 'react-hot-loader/patch';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';
import { AppContainer } from 'react-hot-loader';

import Text from './components/text';

const LayoutCtx = (props) => {
  const Layout = require('./components/layout').default;
  return (
    <AppContainer>
      <LayoutCtx {...props} />
    </AppContainer>
  );
};

FlowRouter.route('/', {
  name: 'hello',
  action() {
    mount(LayoutCtx, {
      content: () => (<Text />),
    });
  },
});
