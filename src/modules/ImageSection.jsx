import React, { useState } from "react"
import axios from 'axios'

const ImageSection =  (url) =>{

    const [ data, setData ] = useState()
    const [ images, setImages ] = useState()
    let imageArr = []
    const [ newArr, setNewArr ] = useState()


     axios.get(url.urlData)
     .then(function (response) {
     setData(response.data)
     setImages(response.data.photos.photo)
     getData()
     })


     const getData = () =>{
        images ? images.map((image) =>{

            return getFlickrImageUrl(image, 'q')

             }) 
             : 
             console.log('not yet')}
      

             const getFlickrImageUrl = (image, size) =>{
                let serverId = image.server
                let id = image.id 
                let secret = image.secret
                let imgSrc = `https://live.staticflickr.com/${serverId}/${id}_${secret}_z.jpg` 
                if (size) {
                    // Configure image size
                    imgSrc += `_${size}`;
                  }
                  imgSrc += '.jpg';
                  setNewArr({imgSrc})
                  return imgSrc;
                };

    return(
        <section>
            <h1>Images goes here</h1>
            {imageArr ?  imageArr.map((image, i) =>{
                <figure key = {i}>
                    <img src={image} alt="" />
                </figure>
                
            }) : null}
        </section>
    )
}
export default ImageSection