import React, { useEffect, useMemo, useState } from "react";
import MoviesLayot from "../components/MoviesLayot";
import Loading from "../components/Loading";
import fetchMovies from "../components/Api";
import settingsSlider from "../constans/params";

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!value.trim()) {
      return; 
    }

    try {
      setLoading(true);
      setError(null);

      
      const url = `https://api.themoviedb.org/3/search/movie?api_key=060f347dcc7582a34aa7ccbecd45da16&query=${value}`;
      const request = await fetchMovies(url);
      
      
      if (request.results) {
        setData(request.results);
      } else {
        setData([]);
      }
    } catch (error) {
      setError(error.message || 'ErrroR');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(); 
  }, []);

  return (
    <section className="py-8 w-full h-full">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-secondary">Search movies</h2>
        <div className="">
          <input
            type="text"
            placeholder="Searching"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-roseColor placeholder-black-100"
          />
        </div>

        <button
          onClick={handleSearch}
          className="mt-2 bg-secondary hover:bg-purpleColor text-orangeColor font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-roseColor"
        >
          Search
        </button>
      </div>

      {loading && <Loading />} 
      {error && <p className="text-red-500">{error}</p>} 

      
      {data.length > 0 ? (
        <MoviesLayot params={settingsSlider} searchResults={data} />
      ) : (
        !loading && <p className="uppercase font-mono my-4 font-semibold text-secondary">No results found</p>
      )}
    </section>
  );
};

export default Search;
