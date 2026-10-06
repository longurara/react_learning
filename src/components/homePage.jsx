import { Link, Outlet } from 'react-router'
import { useNavigate } from 'react-router'
export default function HomePage() {
  const navigation = useNavigate();
  const param = 'abc'
  return (
   <>
   <p>Welcome to the Home Page</p>
   <p onClick ={() => navigation('/list')}>List of Players</p>
   <Link to ={`/detail/${param}`}>Detail with params : {param}</Link>
   <Outlet></Outlet>
   </>
  )
}
