import React from 'react'
import './Header.css'
import sign from '../../assets/img/headlogo.png'
import { Link } from 'react-router-dom'
function Header() {
 const nav_titles =[{
    path:'/',display:'Home'
 },
 {
    path:'/services',display:'Services'
 },
 {
    path:'/courses',display:'Courses'
 },
 {
    path:'/about',display:'About'
 }


]
  return (
    <header className='header'>
        <div className="container">
<div className="nav_conatiner">
<div className="logo">

<div className="logo-img">
    <img src={sign} alt="" />
</div>
<h2>Code Sense</h2>


</div>
<div className="navigation">
<ul className='menu'>
    {
        nav_titles.map((item)=>(
<li className='nav_item'> <Link to={item.path}>{item.display}</Link></li>
        ))
    }






</ul>




</div>

</div>






        </div>





    </header>
  )
}

export default Header