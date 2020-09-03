import React from 'react';
import { NavigationBar, Footer } from './navigations/Components';

const App = ({ children }) => (
  <>
    <NavigationBar />
    <div className="contents-outer">
      {children}
    </div>
    <Footer />
  </>
);
export default App;
