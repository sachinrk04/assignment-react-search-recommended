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
        // const url = `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=410e09f6c1e4f189dd8e8d6144031dcb&group_id=1577604%40N20&per_page=20&page=5&format=json&nojsoncallback=1&api_sig=4c1450ae1480d059824e19a9a425db64`
        const url = `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=a90ef26cfa2329b4f9251bea4794b17e&group_id=${this.props.nsid}&per_page=&page=&format=json&nojsoncallback=1&api_sig=c81ba0c8f484448d9c913e7708787a73`
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