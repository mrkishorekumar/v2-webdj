import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Loading from '../components/Loading'

const HomePage = lazy(() => import('../pages/Home'))
const LoginPage = lazy(() => import('../pages/Login'))

function Router() {


  const RouterMap = [
    {
      protected: false,
      component: <HomePage />,
      path: "/"
    },
    {
      protected: false,
      component: <LoginPage />,
      path: "/login"
    },
  ]


  return (
    <Routes>
      {
        RouterMap.map((value, index) => {
          return (
            (!value.protected) ? (
              <Route key={index} path={value.path} element={
                <Suspense fallback={<Loading />}>
                  {value.component}
                </Suspense>
              } />
            ) :
              <Route key={index} path={value.path} element={
                <ProtectedRoute>
                  <Suspense fallback={<Loading />}>
                    {value.component}
                  </Suspense>
                </ProtectedRoute>
              } />
          )
        })
      }
    </Routes>
  )
}

export default Router