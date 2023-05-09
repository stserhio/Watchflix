import React from 'react';
import {ArrowRightIcon, AtSymbolIcon, MapPinIcon, PhoneIcon} from "@heroicons/react/24/outline";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-gray-900 '>
            <div className='max-w-screen-2xl mx-auto grid grid-cols-3'>
                <div className='py-28 px-16'>
                    <h3 className='text-6xl'>Watchflix</h3>
                    <p className='text-base text-gray-300 mt-8'>Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A aliquid consequatur deserunt dignissimos dolore, dolorum enim illo ipsam, iusto magnam
                        neque</p>
                    <div className='mt-10'>
                        Join our newsletter!
                    </div>
                    <div className='mt-6 relative flex items-center'>
                        <input className=' p-4 bg-gray-700 rounded-md w-full max-w-xs' placeholder='insert email here'/>
                        <button className='bg-yellow-300 rounded-md p-3 -ml-12'><ArrowRightIcon
                            className='text-black h-4 w-4 items-center'/></button>
                    </div>

                </div>

            </div>
            <div className='px-16 py-28 col-span-2'>
                <div className='flex gap-40'>
                    <div className='grid gap-2'>
                        <h4 className='font-bold'>Product</h4>
                        <NavLink to={'/movies'}>Movies</NavLink>
                        <NavLink to={'/tv-show'}>Show</NavLink>
                        <NavLink to={'/video'}>Videos</NavLink>
                    </div>
                    <div className='grid gap-2'>
                        <h4 className='font-bold'>Media Group</h4>
                        <NavLink to={"/"}>Studio</NavLink>
                        <NavLink to={"/"}>TV</NavLink>
                        <NavLink to={"/"}></NavLink>

                    </div>
                    <div className='grid gap-2'>
                        <h4 className='font-bold'>Sidebar</h4>
                        <NavLink to={"/"}>About</NavLink>
                        <NavLink to={"/"}>Careers</NavLink>
                        <NavLink to={"/"}>Press</NavLink>

                    </div>
                </div>
                <div className='flex mt-24 gap-4'>

                    <span className='flex gap-2 items-center'><MapPinIcon className='h-4 w-4'/>8819 Ohio St. South Gate, California 90280</span>

                    <span className='flex gap-2 items-center'><AtSymbolIcon
                        className='h-4 w-4'/>ourstudio@hello.com</span>

                    <span className='flex gap-2 items-center'><PhoneIcon className='h-4 w-4 '/>+271-324-234-522</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;