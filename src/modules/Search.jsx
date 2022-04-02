import React, { useEffect, useState } from "react";
import { API_KEY, SECRET } from "../secret/secret";
import ImageSection from "./ImageSection";


const Search = () =>{
    console.log(API_KEY)
    const [ search, setSearch ] = useState('cats')
    const [ images, setImages ] = useState([])
    const newArr = []
    const Key = API_KEY.toString()
    const [ picsPerPage, setPicsPerPage ] = useState(30)
    let  currentPage = 1;

        const data = {
            method: 'flickr.photos.search',
            api_key: Key,
            text: search, // Search Text
            sort: 'relevance',
            media: 'photo',
            per_page: picsPerPage,
            license: '4',
            extras: 'owner_name,license',
            format: 'json',
            nojsoncallback: 1,
          };
          
          const parameters = new URLSearchParams(data);
          
          const url = `https://api.flickr.com/services/rest/?${parameters}`;
          console.log(url);

//skickas sedan in här, där parametern (datan) numera heter pictures


    return(
        <>
            <h1>hello searchfield</h1>
            <input className='input' type="text" />
            <button className="searchBtn">search</button>
           { images ? < ImageSection urlData={url} /> : null } 
        </>
    )
}
export default Search