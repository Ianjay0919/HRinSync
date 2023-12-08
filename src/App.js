import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import MaybeShowNavBar from './components/MaybeShowNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';

function App() {

  return (
    <div className="App">
      <MaybeShowNavBar>
        <SideBar />
      </MaybeShowNavBar>
      <Outlet />
    </div>
  );
}


export default App;
