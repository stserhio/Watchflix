import Episodes from "./Episodes";
import {useEffect, useState} from "react";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
// import ViewListCard from "./ViewListCard";


export default function DetailSeasons(props){
    const { id }= props
    const urlEpisodesDetail = 'https://api.themoviedb.org/3/tv/' + id + '?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US'

    const [detail, setDetail] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [numberSeason, setNumberSeason] = useState(0)

    useEffect(
        () => {
            fetch(urlEpisodesDetail)
                .then(response => response.json())
                .then(answer => {
                    setDetail(answer)
                    setIsLoading(false)
                })

        }, [urlEpisodesDetail])



    if(isLoading){
        return(
            <div>Loading...</div>
        )
    }

    let buttons = [];

    for (let index = 0; index < detail.number_of_seasons; index++){
        buttons.push(
            <SwiperSlide key={index}>
                <button season={index + 1} onClick={(e)=>setNumberSeason(e.target.attributes['season'].value)} className='bg-yellow-300 rounded-md px-2 py-1 text-black cursor-pointer'>Season {index+1}</button>
            </SwiperSlide>
        )
    }

    return(
        <div className='mt-10 '>
            <div className='flex gap-2 text-white relative'>
                <Swiper
                    slidesPerView={9}
                    spaceBetween={30}
                    grabCursor={true}
                    navigation={true}
                    modules={[Navigation]}
                    pagination={false}
                    className="flex item-center justify-center"
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 16,
                        },
                        1336: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >{buttons}
                </Swiper>

            </div>
            <div className='flex justify-between items-center mt-4 mx-auto '>
                <Episodes id={id} season={numberSeason} />

            </div>
        </div>
    )
}