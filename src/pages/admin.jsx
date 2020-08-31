import React from 'react';
import App from '../components/App.js';
import Auth from '../components/utils/Auth';
import Admin from '../components/admin/Admin';

export default () => (
  <>
    <App>
      <Auth>
        <Admin />
      </Auth>
    </App>
  </>
);
