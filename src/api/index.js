import axios from 'axios';


export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,

            },
            headers: {
                'X-RapidAPI-Key': 'c03a2e4613mshaec2909cdce0fd3p19f1a8jsn62c4a0c4c971',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });


        return data
    } catch(error) {
        console.log(error)
    }
}