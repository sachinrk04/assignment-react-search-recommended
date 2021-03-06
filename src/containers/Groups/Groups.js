import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Search from '../../components/Search/Search';
import Group from '../../components/Group/Group';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';

class Groups extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.items = [
    //     //     'Sachin',
    //     //     'Rishabh',
    //     //     'Sudeep',
    //     //     'Ram',
    //     //     'Mohan'
    //     // ];
    //     this.state = {
    //         groups: [],
    //         querys: [],
    //         text: '',
    //         // nsid: '',
    //         nsid: '1497615@N23'
    //     };
    // }

    // componentDidMount() {
    //     this.loadGroup()
    // }

    // loadGroup = () => {
    //     const { groups } = this.state;
    //     const url = `https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=259a7bda5d5d4051a2c119d36ae88cd3&text=name&per_page=20&page=5&format=json&nojsoncallback=1&api_sig=a02bb9d93c00d93198c2b4aada143556`
    //     axios.post(url)
    //         .then(response => {
    //             console.log(response);
    //             this.setState({
    //                 groups: [...groups, ...response.data.groups.group],
    //             })
    //         })
    // }

    // onSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Nsid :",this.state.nsid);
    //     const base_url = `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=a90ef26cfa2329b4f9251bea4794b17e&group_id=${this.state.nsid}&per_page=&page=&format=json&nojsoncallback=1&api_sig=c81ba0c8f484448d9c913e7708787a73`;
    //     axios.post(base_url)
    //      .then(response => {
    //          console.log('Hello from handle submit', response);
    //      });

    // }

    // onTextChanged = (e) => {
    //     const value = e.target.value;
    //     let querys = [];
    //     console.log("Value :",value);
        
    //     let arr = this.state.groups;
    //     if (value.length > 0) {
    //         const regex = new RegExp(`^${value}`, 'i');
    //         querys = arr.sort().filter(v => regex.test(v.name, v.nsid));
    //     }
    //     this.setState(() => ({ querys, text: value  }));
    // }

    // suggestionSelected = (value, nsid) => {
    //     this.setState(() => ({
    //         text: value,
    //         nsid: nsid,
    //         querys: [],
    //     }));
    // }
    // suggestionSelectedA = (nsid) => {
    //     this.setState(() => ({
    //         nsid: nsid,
    //     }));
    // }

    // renderSuggestions = () => {
    //     if (this.state.querys.length === 0) {
    //         return null;
    //     }
    //     return (
    //         <ul className="Search-Style-ul">
    //             {this.state.querys.map(item => <li className="Search-Style-li" onClick={() => this.suggestionSelected(item.name, item.nsid)} key={item.nsid}>{ item.name}</li>)}
    //         </ul>
    //     )
    // }


    render() {
        // console.log("Query:", this.state.querys);
        return (
            <React.Fragment>
                <Search 
                    renderSuggestions={this.props.renderSuggestions} 
                    onTextChanged={this.props.onTextChanged} 
                    text={this.props.text}
                    submit={this.props.submit}
                     />
                <div className="container my-3">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-3 text-center text-uppercase mb-1">
                        <h1 className="text-slanted">Recommended</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.props.querys.map(group => {
                                return (
                                    <Group 
                                        key={group.nsid} 
                                        iconfarm={group.iconfarm}
                                        iconserver={group.iconserver}
                                        nsid={group.nsid}
                                        name={group.name}
                                         />
                                );
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-3 text-center text-uppercase mb-1">
                            <h1 className="text-slanted">Groups</h1>
                        </div>
                    </div>
                    <div className="row">
                        {
                            this.props.groups.map(group => {
                                return (
                                    <Group 
                                        key={group.nsid} 
                                        iconfarm={group.iconfarm}
                                        iconserver={group.iconserver}
                                        nsid={group.nsid}
                                        name={group.name}
                                         />
                                );
                            })
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Groups;











// import React, { Component } from 'react';
// import Search from '../../components/Search/Search';
// import Group from '../../components/Group/Group';
// import axios from 'axios';

// class Groups extends Component {
//     constructor(props) {
//         super(props);
//         this.items = [
//             'Sachin',
//             'Rishabh',
//             'Sudeep',
//             'Ram',
//             'Mohan'
//         ];
//         this.state = {
//             groups: [],
//             suggestions: [],
//             text: '',
//         };
//     }

//     componentDidMount() {
//         this.loadGroup()
//     }

//     loadGroup = () => {
//         const { groups } = this.state;
//         const url = `https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=5b624c36c0b20298284e08356032e34d&text=name&per_page=20&page=2&format=json&nojsoncallback=1&api_sig=c202f38d322505ecadeec5938406c296`
//         axios.post(url)
//             .then(response => {
//                 console.log(response);
//                 this.setState({
//                     groups: [...groups, ...response.data.groups.group]
//                 })
//             })
//     }

//     onTextChanged = (e) => {
//         // const { items } = this.props;
//         // console.log("Name :",items);
//         const value = e.target.value;
//         let suggestions = [];
//         if (value.length > 0) {
//             const regex = new RegExp(`^${value}`, 'i');
//             suggestions = this.items.sort().filter(v => regex.test(v)); 
//         }
//         this.setState(() => ({ suggestions, text: value }));

//     }

//     suggestionSelected = (value) => {
//         this.setState(() => ({
//             text: value,
//             suggestions: [],
//         }));
//     }

//     renderSuggestions = () => {
//         const { suggestions } = this.state;
//         if (suggestions.length === 0) {
//             return null;
//         }
//         return (
//             <ul className="Search-Style-ul">
//                 {suggestions.map(item => <li className="Search-Style-li" onClick={() => this.suggestionSelected(item)} key={item}>{item}</li>)}
//             </ul>
//         )
//     }


//     render() {
//         return (
//             <React.Fragment>
//                 <Search renderSuggestions={this.renderSuggestions} onTextChanged={this.onTextChanged} text={this.state.text} />
//                 <div className="container my-3">
//                     <div className="row">
//                         <div className="col-10 mx-auto col-md-3 text-center text-uppercase mb-1">
//                             <h1 className="text-slanted">Groups</h1>
//                         </div>
//                     </div>
//                     <div className="row">
//                         {
//                             this.state.groups.map(group => {
//                                 return (
//                                     <Group 
//                                         key={group.nsid} 
//                                         iconfarm={group.iconfarm}
//                                         iconserver={group.iconserver}
//                                         nsid={group.nsid}
//                                         name={group.name} />
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </React.Fragment>
//         );
//     }
// }

// export default Groups;