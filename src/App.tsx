import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './components/ProfileDetails/Education';
import ProjectAndContribution from './components/ProfileDetails/ProjectAndContribution';
import Contact from './components/ProfileDetails/Contact';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Members from './pages/Members';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';


const MyApp = ():JSX.Element => {

  return (
    <div className='[&_*]:transition-all [&_*]:ease-linear [&_*]:duration-[170ms]'>
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
        { path: '/projects/:projectId', element: <ProjectDetails />},
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
