import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {Navbar, Nav, Container, Button} from 'react-bootstrap';
import {Routes, Route, Link, Outlet, useNavigate} from 'react-router-dom'
import './App.css';
import data from './data.js'
import About from './pages/About.js'
import Detail from './pages/Detail.js'

function App() {
  let [shoes] = useState(data)
  function Card(props){
    return (
      <div className='list'>
        <img src={'/img/product0'+ props.i +'.jpg'}/>
        <p>{props.shoes.title}</p>
        <p>{props.shoes.content}</p>
        <p>{props.shoes.price} 원</p>
      </div>
    )
  }

  let navigate = useNavigate()

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">로고</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/detail">상품</Nav.Link>
            <Nav.Link href="/about">회사소개</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/about/ceo')}}>조직도</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    {/* <img src={`{$process.env.PUBLIC_URL}/img/test1.jpg`} /> */}

    <div className='headimg'>
      <img src='/img/test1.jpg' />
    </div>

    <Routes>
      <Route path='/' element={
        <div className='productList'>
          {/* <div className='list'>
            <img src='/img/product01.jpg'/>
            <p>{data[0].title}</p>
            <p>{data[0].content}</p>
            <p>{data[0].price}</p>
          </div> */}
          {shoes.map((a,i)=> {
            return (
              <div key={i} onClick={()=> {navigate('./detail/' + (i))}}>
                <Card shoes={shoes[i]} i={i+1} key={i} />
                {/* <Card shoes={shoes[i]} i={i} /> */}
              </div>
            )
            })}
        </div>
      } />
      <Route path='/detail/:id' element={<Detail shoes={shoes}/>} />
      {/* <Route path='/about' element={<div>회사소개</div>} />
      <Route path='/about/ceo' element={<div>제가 회장 입니다</div>} /> */}
      <Route path='/about' element={<About />}>
        <Route path='ceo' element={<div>제가 회장 입니다</div>} />
      </Route>
      <Route path='/member' element={<div>조직도</div>} />
      <Route path='*' element={<div>404 error</div>}/>
    </Routes>
    </>
  );


}

export default App;
