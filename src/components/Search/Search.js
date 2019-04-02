import React, { Component } from 'react';
import './Search.css';
// import axios from 'axios';

class Search extends Component {
    // constructor(props) {
    //     super(props);
    //     this.items = [
    //         'Sachin',
    //         'Rishabh',
    //         'Sudeep',
    //         'Ram',
    //         'Mohan'
    //     ];
    //     this.state = {
    //         suggestions: [],
    //         text: '',
    //     };
    // }

    // onTextChanged = (e) => {
    //     // const { items } = this.props;
    //     // console.log("Name :",items);
    //     const value = e.target.value;
    //     let suggestions = [];
    //     if (value.length > 0) {
    //         const regex = new RegExp(`^${value}`, 'i');
    //         suggestions = this.items.sort().filter(v => regex.test(v)); 
    //     }
    //     this.setState(() => ({ suggestions, text: value }));

    // }

    // suggestionSelected = (value) => {
    //     this.setState(() => ({
    //         text: value,
    //         suggestions: [],
    //     }));
    // }

    // renderSuggestions = () => {
    //     const { suggestions } = this.state;
    //     if (suggestions.length === 0) {
    //         return null;
    //     }
    //     return (
    //         <ul className="Search-Style-ul">
    //             {suggestions.map(item => <li className="Search-Style-li" onClick={() => this.suggestionSelected(item)} key={item}>{item}</li>)}
    //         </ul>
    //     )
    // }

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
                            {/* <form className="mt-4"> */}
                                <label htmlFor="search" className="text-capitalize">
                                    type name of photo group
                                </label>
                                <div className=" border border-secondary">
                                    <div className="Search-Style input-group">
                                        <input
                                            type="text"
                                            // name="search"
                                            value={text}
                                            onChange={this.props.onTextChanged}
                                            placeholder="title"
                                            className="Search-Style-input form-control" 
                                        />
                                        {/* <input  onChange={this.onTextChanged} type="text" /> */}
                                        <div className="input-group-append">
                                            <button type="submit" className="input-group-text bg-primary text-white">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {this.props.renderSuggestions()}
                                </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Search;
