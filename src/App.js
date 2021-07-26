import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Navbar } from './component/navbar/Navbar';
import Home from './component/home/Home';
import AboutUs from './component/aboutUs/AboutUs';
import { TrustUs } from './component/trustUs/TrustUs';
import CounterUp from './component/counterUp/CounterUp';
import { WhatsappButton } from './component/whatsappButton/WhatsappButton';
import { Develop } from './component/develop/Develop';
import ConstactUs from './component/contactUs/ConstactUs';
import Footer from './component/footer/Footer';
import { Provider } from 'react-redux'
import store from './redux/store';
import './variable.css'


function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <WhatsappButton/>
              <Home/>
              <TrustUs/>
              <AboutUs/>
              <CounterUp/>
              <Develop/>
              <ConstactUs/>
              <Footer/>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
