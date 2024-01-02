import React, { useEffect, useMemo, useState } from "react";
import Movies from "../components/Movies";
import Loading from "../components/Loading";
import fetchMovies from "../components/Api";


const Search = () => {
    

    const [value, setValue] = useState(' ');
    const [data, setData] = useState([])

    const providerValue = useMemo(() => ({ value, setValue }), [value, setValue]);
    const handleSearch = () => {
        setValue(value);
      };

    const url =
      `https://api.themoviedb.org/3/search/movie?api_key=060f347dcc7582a34aa7ccbecd45da16&query=${providerValue.value}`;
      useEffect( () => {
        async function get() {
            try {
                const request = await fetchMovies(url)
                
                setData(request)
            } catch (error) {
                console.error(error)
            }
        }
        get()

      }, []);

    //   let filterResult = results.filter(item => console.log(item))

    //   let filterMovie = results.filter((item) => {
    //     if (!item) {
    //       return;
    //     } else {
    //       return item.title.toLowerCase().includes(value.toLowerCase());
    //     }
    //   });
      return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-orangeColor">Search movies</h2>
        <div className="">
            <input type="text" placeholder="Searching" value={value} onChange={(e) => setValue( e.target.value)} className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-roseColor placeholder-black-100"/>
        </div>
        
        <button onClick={handleSearch} className="mt-2 bg-orangeColor hover:bg-roseColor text-secondary font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-roseColor">Search</button>
      </div>
    {
        console.log(data)
    }
      
    </section>

    
  );
};

export default Search;
