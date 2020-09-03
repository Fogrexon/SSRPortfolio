import React from 'react';
import App from '../../../components/App';
import Auth from '../../../components/utils/Auth';
import BlogEdit from '../../../components/blogedit/BlogEdit';

export default () => (
  <>
    <App>
      <Auth>
        <BlogEdit />
      </Auth>
    </App>
  </>
);