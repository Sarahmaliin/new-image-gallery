import React, { useState } from "react"
import axios from 'axios'

const ImageSection =  (url) =>{

    const [ data, setData ] = useState()
    const [ images, setImages ] = useState()


     axios.get(url.urlData)
     .then(function (response) {
     setData(response.data)
     setImages(data.photos.photo)
     })


     


    
    return(
        <section>
            <h1>Images goes here</h1>
            
        </section>
    )
}
export default ImageSection