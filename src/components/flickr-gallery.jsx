import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

// Component that fetches and displays a gallery of photos from Flickr based on a search term.
const MyGallery = (props) => {
  const API = "dc140afe3fd3a251c2fdf9dcd835be5c";
  const [photos, setPhotos] = useState([]);

  // Fetches photos from Flickr's API when the component mounts or the search term changes.
  useEffect(() => {
    const getPhotos = async () => {
      const response = await axios.get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&text=${props.searchTerm}&per_page=50&sort=interestingness-desc&extras=date_taken&format=json&nojsoncallback=1&api_key=${API}`
      );
      setPhotos(response.data.photos.photo);
    };
    if (props.searchTerm) {
      getPhotos();
    }
  }, [props.searchTerm]);

  // Returns a gallery of photos, each of which opens a larger version when clicked.
  return (
    <Gallery>
      {photos.map((photo, index) => (
        <Item
          key={index}
          original={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
          thumbnail={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
          width="1024"
          height="768"
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_s.jpg`}
            />
          )}
        </Item>
      ))}
    </Gallery>
  );
};

export default MyGallery;
