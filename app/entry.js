import 'react-hot-loader/patch';
import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';
import { AppContainer } from 'react-hot-loader';

import ConsoleErrorReporter from './components/console-error-reporter';

const LayoutCtx = (props) => {
  const Layout = require('./components/layout').default;
  return (
    <AppContainer errorReport={ConsoleErrorReporter}>
      <LayoutCtx {...props} />
    </AppContainer>
  );
};

FlowRouter.route('/', {
  name: 'hello',
  action() {
    const Text = require('./components/text').default;
    mount(LayoutCtx, {
      content: () => (<Text />),
    });
  },
});

if (module.hot) {
  module.hot.accept([
    './components/layout',
    './components/text',
  ], () => {
    FlowRouter._current.route._action(FlowRouter._current.params);
  });
}
