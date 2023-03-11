import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Dark from './themes/Dark';
import Home from './pages/Home';
import { SalesProvider } from './context/SalesContext';

const App = () => {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyles />
      <SalesProvider>
        <Home />
      </SalesProvider>
    </ThemeProvider>
  );
};

export default App;
