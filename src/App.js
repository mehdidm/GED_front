import {useState} from 'react';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Main from "./components/main/Main"
import { BrowserRouter as Router , Switch , Route , Link} from 'react-router-dom';
import ListFile from './pages/file_list/File_list';
import AddFile from './pages/add_file/Add_file';
import Auth from './pages/auth/Login';

function App() {
  const [sidebarOpen , setSidebarOpen] = useState(false);
  const openSidebar = ()=>{
    setSidebarOpen(true);
  }
  const closeSidebar = ()=>{
    setSidebarOpen(false);
  }

  return (
    <>
    
    <Router>
      
    <div className="">
    <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
   
   <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
   
   <Switch>
    <Route path="/"  exact component={Main}/>
    <Route path="/list" component={ListFile}/>
    <Route path="/add_file" component={AddFile}/>
    <Route path="/login" component={Auth}/>
    
     
    </Switch>

  </div>

  

    </Router>

</>
  );
}






export default App;