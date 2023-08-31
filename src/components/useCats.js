import { useState } from "react"
import axios from "axios"

const useCats = (initialValue) => {
const [data, setData] = useState(initialValue)

const getData = async (url) => {
    try{
        const {data} = await axios.get(url);
        setData(data);
    } catch (error) {
        console.log(error)
        }
    }
return { data, getData }
}
export default useCats