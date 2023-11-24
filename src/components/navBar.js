import React, { useState } from "react";
import {Link } from "react-router-dom";
const NavBar = () => {
    const [selected, setSelected] = useState('About Me')
    const compliant = (x)=> {
        return selected === x
    }
        return (
            <div className="py-3 bg-gradient-to-r from-[#9370DB] to-[#1E90FF] text-xl text-white">
                <ul className="flex justify-around items-center	">
                    <li onClick={() => setSelected('About Me')} className={`cursor-pointer ${compliant('About Me') ? 'rounded-full bg-[#E6E6FA] text-black px-6 py-3' : ''}`}> <Link to="/">About Me</Link></li>
                    <li onClick={()=>setSelected('Experience')} className={`cursor-pointer ${compliant('Experience') ? 'rounded-full bg-[#E6E6FA] text-black px-6 py-3' : ''}`}> <Link to="/Experience">Experience</Link></li>
                    <li onClick={()=>setSelected('Background')} className={`cursor-pointer ${compliant('Background') ? 'rounded-full bg-[#E6E6FA] text-black px-6 py-3' : ''}`}><Link to="/Background">Background</Link></li>
                    <li onClick={()=>setSelected('Contact')} className={`cursor-pointer ${compliant('Contact') ? 'rounded-full bg-[#E6E6FA] text-black px-6 py-3' : ''}`}><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
        );
    };

export default NavBar;
