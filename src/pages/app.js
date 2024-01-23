import React from 'react'
import theme from '../gatsby-plugin-theme-ui/index'
import ColorModeToggle from '../ColorModeToggle'
import { ThemeUIProvider } from 'theme-ui'
import { Button } from 'theme-ui'

const App = () => {
    return (
      <ThemeUIProvider theme={theme}>
        <div>
          <ColorModeToggle />
          <Button color='primary' backgroundColor='secondary' >AA</Button>
          <Button >DDD</Button>
        </div>
      </ThemeUIProvider>
    );
  };
  
  export default App;