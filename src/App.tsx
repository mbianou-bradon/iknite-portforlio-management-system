import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './components/Education';
import ProjectAndContribution from './components/ProjectAndContribution';
import Contact from './components/Contact';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Members from './pages/Members';
import About from './pages/About';


const MyApp = ():JSX.Element => {

  return (
    <div>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )

}

const router = createBrowserRouter (
  [
    {
      element: <MyApp />,
      errorElement: <Error />,
      children: [
        { path: '/', element: <Home/>},
        { path: '/projects', element: <Projects />},
        { path:'members', element:  <Members/>},
        { path: '/members/:memberId', element: <Profile/>,
          children: [
            { path: '/members/:memberId', element: <Education />},
            { path: '/members/:memberId/contributions', element: <ProjectAndContribution />},
            { path: '/members/:memberId/contact', element: <Contact />}
          ]
        },

        {path: '/about', element: <About />}
      ]
    }
  ]
)

function App() {
  return (
    <div className="App text-slate-900 selection:text-white selection:bg-violet-600 px-2 md:px-4">
    
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
