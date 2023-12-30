


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
