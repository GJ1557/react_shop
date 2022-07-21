import { Outlet, Link } from 'react-router-dom'

function About() {
    return(
      <div>
        <h1>회사소개</h1>
        <Link to="/about/ceo">ㅇ</Link>
        <Outlet></Outlet>
      </div>
    )
  }

export default About