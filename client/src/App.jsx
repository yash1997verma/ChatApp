import './App.css'
import CreateGroups from './components/CreateGroups/CreateGroups';
import Main from './components/Main/Main'
import Messages from './components/Messages/Messages';
import WelcomeMessage from './components/Messages/WelcomeMessage';
import OnlineGroups from './components/Online/OnlineGroups';
import OnlineUsers from './components/Online/OnlineUsers';
import SignIn from './pages/SignIn'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from './pages/SignUp';

function App() {
  // include a error boundary as well
  const router = createBrowserRouter([
    {
      path: '/',
      element: <SignIn />
    },
    {
      path: '/signUp',
      element: <SignUp />
    },
    {
      path: 'app',
      element: <Main />,
      children: [
        {
          index: true,
          element:<WelcomeMessage />
        },
        {
          path:'messages',
          element:<Messages />
        },
        {
          path: 'create-groups',
          element: <CreateGroups />
        },
        {
          path: 'users',
          element: <OnlineUsers />
        },
        {
          path: 'groups',
          element: <OnlineGroups />
        }
      ]
    }
  ])
  return (
   <div className='font-segoe-ui  flex items-center justify-center bg-[#e2e1dd] h-[100vh] '>
      <RouterProvider router={router}></RouterProvider>
      {/* <Main /> */}
   </div>
  )
}

export default App
