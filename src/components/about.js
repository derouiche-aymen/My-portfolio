import React from "react";
import data from "../data";
import { SlLocationPin } from "react-icons/sl";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";

const About = () => {
    return(
        <div>
            <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
                <div className="col-span-1">
                    <img src="/me1.jpg" alt="image" className="rounded-full"/>
                    <div>
                        <div className="flex items-center text-[#9370DB] text-xl"><MdDriveFileRenameOutline color="#9370DB"/> Name : {data.about.name}</div>
                        <div className="flex items-center text-[#9370DB] text-xl"><IoMdPhonePortrait color="#9370DB"/> Phone : {data.about.phone}</div>
                        <div className="flex items-center text-[#9370DB] text-xl"><SlLocationPin color="#9370DB"/> Location : {data.about.location}</div>
                    </div>
                </div>
                <div className="text-2xl font-bold ">
                   {data.about.description}
                </div>
                <p>This is test Zoubair Changes</p>
                <p>This is test aymen Changes</p>
            </div>
        </div>
    )
}

export default About