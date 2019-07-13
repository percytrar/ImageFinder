import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './components/navbar/navbar';
import Search from './components/search/Search'

function App() {
  return (
    <MuiThemeProvider>
      <div>
        <NavBar/>
        <div style={{padding:'20px'}}>          
          <Search />
        </div>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
