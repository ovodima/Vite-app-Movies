import React from 'react';
import Catalog from '../components/Catalog';
import { useRecoilValue } from 'recoil';
import { moviesState } from '../constans/state';
import Loading from '../components/Loading';
import Links from '../constans/links';







const images = [

  ];
// const images = [
//     "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/416430/pexels-photo-416430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/310452/pexels-photo-310452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//     "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//   ];


const Recomendation = () => {

    const moviesImage = useRecoilValue(moviesState)

    function createMoviesImg () {
     moviesImage.results.forEach(item => {
        if(images.length <= 5) {
            return images.push(Links.imgPath + item.poster_path).toString()
        }
     })
    }``
    

    if(!moviesImage.results) {
        return <Loading /> 
    } else {
        
        return (
            <div>
                {console.log(createMoviesImg())}
                {/* <Catalog images={images} /> */}
                
            </div>
        )
    }

    
}

export default Recomendation;
