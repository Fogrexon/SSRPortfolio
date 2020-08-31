import React from 'react';
import App from '../components/App.js';
import Auth from '../components/utils/Auth';
import GalleryAdmin from '../components/admin/GalleryAdmin';

export default () => (
  <>
    <App>
      <Auth>
        <GalleryAdmin />
      </Auth>
    </App>
  </>
);
