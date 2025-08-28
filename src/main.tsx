import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/Home/Home.tsx'
import Product from './components/Product/Product.tsx'
import First from './components/Product/First.tsx'
import Second from './components/Product/Second.tsx'
import Third from './components/Product/Third.tsx'
import Fourth from './components/Product/Fourth.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='products/' element={<Product />} >
        <Route path='first' element={<First />} >
          <Route path='second' element={<Second />} />
          <Route path='third' element={<Third />} />
          <Route path='fourth' element={<Fourth />} />
        </Route>
        <Route path='second' element={<Second />} >
          <Route path='first' element={<First />} />
          <Route path='third' element={<Third />} />
          <Route path='fourth' element={<Fourth />} />
        </Route>
        <Route path='third' element={<Third />} >
          <Route path='second' element={<Second />} />
          <Route path='first' element={<First />} />
          <Route path='fourth' element={<Fourth />} />
        </Route>
        <Route path='fourth' element={<Fourth />} >
          <Route path='second' element={<Second />} />
          <Route path='first' element={<First />} />
          <Route path='third' element={<Third />} />
        </Route>
      </Route>
      <Route path='first' element={<First />} >
        <Route path='second' element={<Second />} />
        <Route path='third' element={<Third />} />
        <Route path='fourth' element={<Fourth />} />
      </Route>
      <Route path='second' element={<Second />} >
        <Route path='first' element={<First />} />
        <Route path='third' element={<Third />} />
        <Route path='fourth' element={<Fourth />} />
      </Route>
      <Route path='third' element={<Third />} >
        <Route path='second' element={<Second />} />
        <Route path='first' element={<First />} />
        <Route path='fourth' element={<Fourth />} />
      </Route>
      <Route path='fourth' element={<Fourth />} >
        <Route path='second' element={<Second />} />
        <Route path='first' element={<First />} />
        <Route path='third' element={<Third />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
