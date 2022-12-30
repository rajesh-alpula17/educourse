import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, HashRouter  } from "react-router-dom";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import Home from './components/Home';
import Header from './components/Header';
import Students from './components/Students';
import Courses from './components/Courses';
import Batches from './components/Batches';
import AddStudent from './components/student/AddStudent';

function App() {
  return (
    <BrowserRouter>      
        <div className="App bg-info mb-3">
          <header className="container">
            <Header></Header>
          </header>          
        </div>
        <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/students' element={< Students />}></Route>
                 <Route exact path='/addstudent' element={< AddStudent />}></Route>
                 <Route exact path='/courses' element={< Courses />}></Route>
                 <Route exact path='/batches' element={< Batches />}></Route>
          </Routes>      
    </BrowserRouter>
  );
}

export default App;