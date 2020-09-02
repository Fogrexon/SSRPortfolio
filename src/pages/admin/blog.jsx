import React from 'react';
import App from '../../components/App';
import Auth from '../../components/utils/Auth';
import BlogAdmin from '../../components/admin/BlogAdmin';

export default () => (
  <>
    <App>
      <Auth>
        <BlogAdmin />
      </Auth>
    </App>
  </>
);
