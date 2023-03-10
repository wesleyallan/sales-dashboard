import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Dark from './themes/Dark';
import Home from './pages/Home';

const App = () => {
  return (
    <ThemeProvider theme={Dark}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
