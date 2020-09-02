import React from 'react';
import { NavigationBar, Footer } from './navigations/Components';

export default ({ children }) => (
  <>
    <NavigationBar />
    <div className="contents-outer">
      {children}
    </div>
    <Footer />
  </>
);
