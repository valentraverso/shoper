import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useSession from '../hooks/useSession.js';
import routes from './routes.js'

export function DOMRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={<route.component routes={route.routes} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export function DOMSubRoutes({ routes }) {
  const [state] = useSession();

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          element={
            route.logedProhibited && state.loged ?
              <Navigate to={'/'} replace={true} />
              :
              <route.component />
              
          }
        />
      ))}
    </Routes>
  )
}

export function PrivateRoutes({ routes }) {
  const [state] = useSession();

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          element={
              state.loged ?
              <route.component />
              :
              <Navigate to={'/'} replace={true} />
          }
        />
      ))}
    </Routes>
  )
}