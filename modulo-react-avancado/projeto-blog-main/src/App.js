import './App.css';
import AppRoutes from './pages/routes'
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <div>
     <GobalStyle/>
      <AppRoutes />
    </div>
  );
}

const GobalStyle = createGlobalStyle`
      *{
      margin: 0;
      padding: 0;
      }
`

export default App;
