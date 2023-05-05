import {PlayIcon, ClockIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {CalendarIcon} from "@heroicons/react/20/solid";

export default function EpisodesCard(props){

    const {id, season, episode} = props

    const [isOpen, setOpen] = useState(false)
    let episodes = 1
    const url = `https://api.themoviedb.org/3/tv/ ${id}/season/${season}/episode/${episode}?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`

    useEffect(
        () => {
            fetch(url)
                .then(response => response.json())
                .then(answer => {
                })

        }, [season])

    return(

        <div className='flex border-2 border-yellow-500 px-2'>
            <div className='w-48 h-48 flex items-center justify-center'>
                <div onClick={() => setOpen(true)} className='flex items-center justify-center border-2 border-yellow-300 bg-transparent w-16 h-16 rounded-full cursor-pointer  '>

                    <div className="flex items-center justify-center bg-yellow-300 w-10 h-10 rounded-full">
                        <PlayIcon className="h-4 w-4 text-black" />
                    </div>
                </div>
            </div>

            <div className='text-white'>
                <p className='mt-5'>Episode 1</p>
                <h1 className='mt-5 font-bold font-black text-yellow-300'>First meet</h1>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda atque error</p>
                <div className='flex gap-2 mt-5'>
                    <ClockIcon className='h-6 w-6'/>
                    <span>6565</span>
                    <CalendarIcon className='ml-3 h-6 w-6 flex'/>
                    <span>23.01.2000</span>
                </div>
            </div>



        </div>
    )
}