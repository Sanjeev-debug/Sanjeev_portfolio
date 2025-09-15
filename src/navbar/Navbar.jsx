
import {  NavLink } from 'react-router'
import './Navbar.css'
import TableRowsIcon from '@mui/icons-material/TableRows';
import { useState } from 'react'


const Navbar = () => {
    const [toggle,setToggle]=useState(false)
    return (
        <>
            <div className="mainNav">
                <h1 className="namePortfolio">Port<span>folio</span></h1>
                 <div className='toggle' onClick={()=>{setToggle(!toggle)}} ><TableRowsIcon className='toggleIcon' /></div>
                <ul className={toggle ? "navUl navtoggle":"navUl"}>
                    <li><NavLink className='navlink' onClick={()=>{setToggle(false)}} style={({isActive})=>({color:isActive ? 'goldenrod':'aqua',textDecoration:'none'})} to={"/"} >Home</NavLink></li>
                    <li><NavLink className='navlink' onClick={()=>{setToggle(false)}} style={({isActive})=>({color:isActive ? 'goldenrod':'aqua',textDecoration:'none'})} to={"/aboutMe"} >About Me</NavLink></li>
                    <li><NavLink className='navlink' onClick={()=>{setToggle(false)}} style={({isActive})=>({color:isActive ? 'goldenrod':'aqua',textDecoration:'none'})} to={"/skills"} >Skills </NavLink></li>
                    <li><NavLink className='navlink' onClick={()=>{setToggle(false)}} style={({isActive})=>({color:isActive ? 'goldenrod':'aqua',textDecoration:'none'})} to={"/projects"} >Projects</NavLink></li>
                    <li><NavLink className='navlink' onClick={()=>{setToggle(false)}} style={({isActive})=>({color:isActive ? 'goldenrod':'aqua',textDecoration:'none'})} to={"/education"} >Education</NavLink></li>
                    <li><NavLink className='navlink' onClick={()=>{setToggle(false)}} style={({isActive})=>({color:isActive ? 'goldenrod':'aqua',textDecoration:'none'})} to={"/contactMe"} >Contact Me</NavLink></li>
                </ul>
                    
            </div>
                    
                    

        </>
    )
}
export default Navbar