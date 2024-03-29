import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomeSectionContainer from './containers/HomeSectionContainer'

const HomePage= () => {
  return(
    <div>
      <HomeSectionContainer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App