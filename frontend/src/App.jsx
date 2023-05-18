import { BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import './App.css'
import './bootstrap.min.css'
import AboutPage from './components/AboutPage';
import Header from './components/Header';
import NotFoundPage from './components/NotFoundPage';
import CoursesPage from './components/courses/CoursesPage';
import ManageCoursePage from './components/courses/ManageCoursePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/courses" Component={CoursesPage} />
            <Route path="/course/:slug" Component={ManageCoursePage} />
            <Route path="/course" Component={ManageCoursePage} />
            <Route Component={NotFoundPage} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
