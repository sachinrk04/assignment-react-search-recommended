import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Gallery from './containers/Gallery/Gallery';
import Groups from './containers/Groups/Groups'; 
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    // this.items = [
    //     'Sachin',
    //     'Rishabh',
    //     'Sudeep',
    //     'Ram',
    //     'Mohan'
    // ];
    this.state = {
        groups: [],
        querys: [],
        text: '',
        // nsid: '',
        nsid: '1497615@N23'
    };
}

componentDidMount() {
    this.loadGroup()
}

loadGroup = () => {
    const { groups } = this.state;
    const url = `https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=c0e1f4c6b028eebf6aa22e4386a65497&text=name&per_page=25&page=5&format=json&nojsoncallback=1&api_sig=659cd5313fc0cb1638611709aa7870ef`
    axios.post(url)
        .then(response => {
            console.log(response);
            this.setState({
                groups: [...groups, ...response.data.groups.group],
            })
        })
}

onSubmit = (e) => {
    e.preventDefault();
    // console.log("Nsid :",this.state.nsid);
    const base_url = `https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=a90ef26cfa2329b4f9251bea4794b17e&group_id=${this.state.nsid}&per_page=&page=&format=json&nojsoncallback=1&api_sig=c81ba0c8f484448d9c913e7708787a73`;
    axios.post(base_url)
     .then(response => {
         console.log('Hello from handle submit', response);
     });
}

onTextChanged = (e) => {
    const value = e.target.value;
    let querys = [];
    // console.log("Value :",value);
    
    let arr = this.state.groups;
    if (value.length > 0) {
        const regex = new RegExp(`^${value}`, 'i');
        querys = arr.sort().filter(v => regex.test(v.name, v.nsid));
    }
    this.setState(() => ({ querys, text: value  }));
}

suggestionSelected = (value, nsid) => {
    this.setState(() => ({
        text: value,
        // nsid: nsid,
        querys: [],
    }));
}

renderSuggestions = () => {
    if (this.state.querys.length === 0) {
        return null;
    }
    return (
        <ul className="Search-Style-ul">
            {this.state.querys.map(item => <li className="Search-Style-li" onClick={() => this.suggestionSelected(item.name, item.nsid)} key={item.nsid}>{ item.name}</li>)}
        </ul>
    )
}


  
  render() {
    return (
      <React.Fragment>
          <Header />
          <Switch>
            <Route path="/" exact render={() => <Groups 
                  renderSuggestions={this.renderSuggestions}
                  onTextChanged={this.onTextChanged}
                  text={this.state.text}
                  submit={this.onSubmit} 
                  querys={this.state.querys}
                  groups={this.state.groups}
                  />} />
            <Route path="/gallery" render={() => <Gallery nsid={this.state.nsid} />} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
