
import React from 'react';
import './output.css';
import Navbar from './Components/Header/Navbar/Navbar';
import Header from './Sections/Header';
import Container from './Components/Header/Container/Container';
import CardContainer from './Components/Main/CardContainer';
import About from './Sections/About';
import Footer from './Sections/Footer';
import Box from './Components/Footer/Box';


const App = () => {
  return (
    <div>
          <Header>
              <Navbar/>
              <Container/>
          </Header>

          <div className={'mx-20 h-[1px] bg-slate-600'} />

          <About>
              <CardContainer />
          </About>

          <Footer>
              <Box/>
          </Footer>
    </div>
  )
}
export default App;

