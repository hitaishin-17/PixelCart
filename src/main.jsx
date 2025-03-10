import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import AdminRoute from './components/AdminRoute.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import CartScreen from './screens/CartScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';
import ShippingScreen from './screens/ShippingScreen.jsx';
import PaymentScreen from './screens/PaymentScreen.jsx';
import PlaceOrderScreen from './screens/PlaceOrderScree.jsx';
import OrderScreen from './screens/OrderScreen.jsx';
import ProfileScreen from './screens/ProfileScreen.jsx';
import OrderListScreen from './screens/Admin/OrderListScree.jsx';
import ProductListScreen from './screens/Admin/ProductListScreen.jsx';
import ProductEditScreen from './screens/Admin/ProductEditScreen.jsx';
import UserListScreen from './screens/Admin/UserListScreen.jsx';
import UserEditScreen from './screens/Admin/UserEditScreen.jsx';
import { Provider } from 'react-redux';
import store from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/search/:keyword' element={<HomeScreen />} />
      <Route path='/page/:pageNumber' element={<HomeScreen />} />
      <Route
        path='/search/:keyword/page/:pageNumber'
        element={<HomeScreen />}
      />
       <Route path='/product/:id' element={<ProductScreen />} />
       <Route path='/cart' element={<CartScreen />} />
       <Route path='/login' element={<LoginScreen/>} />
       <Route path='/register' element={<RegisterScreen/>} />
       <Route path='' element={<PrivateRoute/>} >
        <Route path='/shipping' element={<ShippingScreen/>} />
        <Route path='/payment' element={<PaymentScreen/>} />
        <Route path='/placeorder' element={<PlaceOrderScreen/>} />
        <Route path='/order/:id' element={<OrderScreen/>} />
        <Route path='/profile' element={<ProfileScreen/>} />
      </Route>
      <Route path='' element={<AdminRoute/>} >
      <Route path='/admin/orderList' element={<OrderListScreen/>}/>
      <Route path='/admin/productList' element={<ProductListScreen/>}/>
      <Route path='/admin/productList/:pageNumber' element={<ProductListScreen/>}/>
      <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>}/>
      <Route path='/admin/userlist' element={<UserListScreen/>}/>
      <Route path='/admin/user/:id/edit' element={<UserEditScreen/>}/>
      </Route>
      </Route>
      )
      )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={ true }>
      <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
    </HelmetProvider>
  </StrictMode>,
)
