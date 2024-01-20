


export default async function fetchMovies(url) {
    try {
        const request = await fetch(url)
        const response = await request.json()
        return response
    } catch (error) {
        console.error('Error fetching data...' , error)
        throw error
    }
}


export async function getImages (id) {
    try {
        const getImg = await fetch(`https://api.themoviedb.org/3/movie/${id}/images`)
        const movieImages = await getImages.json()
        return movieImages
    } catch (error) {
        console.error('Error fetching data...' , error)
        throw error
    }
}

