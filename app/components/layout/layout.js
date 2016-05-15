import React from 'react';

const Layout = ({
  content,
}) => (
  <div>
    {content()}
  </div>
);

export default Layout;
