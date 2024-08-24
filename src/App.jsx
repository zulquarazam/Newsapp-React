
import Start from './start'
import {BrowserRouter,Route,Routes} from 'react-router-dom';


const App = () => {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Start/>}></Route>
  
 </Routes>
 </BrowserRouter>
  );
};

export default App;
