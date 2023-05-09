import {useEffect, useState} from "react";
import EpisodesCard from "./EpisodesCard";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";


export default function Episodes(props) {

    const {id, season} = props


    const [isLoading, setIsLoading] = useState(true)
    const [arrayEpisodes, setArrayEpisodes] = useState({})


    const url = `https://api.themoviedb.org/3/tv/ ${id}/season/${season}?api_key=46b3d80e68c3305b185dc8a255c58fac&language=en-US`

    useEffect(
        () => {

            fetch(url)
                .then(response => response.json())
                .then(answer => {
                    setArrayEpisodes(answer.episodes)
                    setIsLoading(false)
                    console.log(answer)
                })

        }, [season])

    if(isLoading){
        return(
            <div>Loading...</div>
        )}

    if(arrayEpisodes?.length < 1){
        return(
            <div>No info...</div>
        )
    }

    return (
        <Swiper
            slidesPerView={3}
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
        >
            {arrayEpisodes.map((episode, index) => {
                return (
                    <SwiperSlide key={index} className='flex items-center justify-center text-center'>
                       <EpisodesCard id={id} season={season} episode={index+1}/>
                    </SwiperSlide>

                )
            })}
        </Swiper>

    )
}