import React, { Component } from 'react';

import './Gallery.css';
import Photo from '../../components/Photo/Photo';
import axios from 'axios';

class Gallery extends Component {
    state = {
        gallerys: [],
        perpage: 10,
        page: 1,
        totalPages: null
      };
    
      componentDidMount() {
        this.loadPhoto()
      }

      loadPhoto = () => {
        const  {gallerys} = this.state;
        const url = `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=5b624c36c0b20298284e08356032e34d&group_id=1577604%40N20&per_page=20&page=2&format=json&nojsoncallback=1&api_sig=f4d8867f75cc895fee0c064762e6ef16`
        axios.get(url)
          .then(response => {
            // console.log(response);
            this.setState({
              gallerys: [...gallerys, ...response.data.photos.photo]
            })
          });
      }
      
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-3 text-center text-uppercase mb-3">
                            <h1 className="text-slanted">Gallery</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.state.gallerys.map(gallery => {
                                return (
                                    <Photo
                                        key={gallery.id}
                                        title={gallery.title}
                                        farm={gallery.farm}
                                        server={gallery.server}
                                        id={gallery.id}
                                        secret={gallery.secret} />
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Gallery;