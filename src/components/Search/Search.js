import React, { Component } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';

class Search extends Component {
    
    render() {
        const { text } = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-1 text-center">
                            <h1 className="text-slanted text-capitalize">
                                search photo with <strong className="text-danger">Flickr</strong>
                            </h1>
                            {/* <Link to="/gallery"> */}
                            <form className="mt-4" onSubmit={this.props.submit}>
                                <label htmlFor="search" className="text-capitalize">
                                    type name of photo group
                                </label>
                                <div className=" border border-secondary">
                                    <div className="Search-Style input-group">
                                        <input
                                            type="text"
                                            value={text}
                                            onChange={this.props.onTextChanged}
                                            placeholder="title"
                                            className="Search-Style-input form-control" 
                                        />
                                        
                                        <div className="input-group-append">
                                           {/* <Link to="/gallery"> */}
                                            <button type="submit" className="input-group-text bg-primary text-white">
                                                <i className="fas fa-search"></i>
                                            </button>
                                            {/* </Link> */}
                                        </div>
                                       
                                    </div>
                                    {this.props.renderSuggestions()}
                                </div>
                            </form>
                            {/* </Link>  */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;
