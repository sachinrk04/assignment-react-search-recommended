import React, { Component } from 'react';
class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
      query:'',
      peoples: [],
    }
  }

 onChange (e){
   this.setState({
     query: e.target.value
   })
  if(this.state.query && this.state.query.length > 1) {
     if(this.state.query.length % 2 === 0){
       this.componentDidMount()
     }
   }
 }

componentDidMount(){
  const url = "https://swapi.co/api/people/";
  fetch (url,{
    method:'GET'
  }).then(results => {
    return results.json();
  }).then(data => {
    let peoples = data.results.map((people) => {
      return(
        <ul key={people.name}>
        <li>{people.name}</li>
        </ul>
      )
    })
    this.setState({peoples: peoples});
    console.log("state", peoples)
  })
}

 render() {
   return (
     <form>
       <input
         type="text"
         className="search-box"
         placeholder="Search for..."
         onChange={this.onChange.bind(this)}
       />
       {this.state.peoples}
     </form>
   )
 }
}

export default Search;



class Search extends Component {
  token = null;
  state = {
    query: "",
    people: []
  };

  onChange = e => {
    const { value } = e.target;
    this.setState({
      query: value
    });

    this.search(value);
  };

  search = query => {
    const url = `https://swapi.co/api/people?search=${query}`;
    const token = {};
    this.token = token;

    fetch(url)
      .then(results => results.json())
      .then(data => {
        if (this.token === token) {
          this.setState({ people: data.results });
        }
      });
  };

  componentDidMount() {
    this.search("");
  }

  render() {
    return (
      <form>
        <input
          type="text"
          className="search-box"
          placeholder="Search for..."
          onChange={this.onChange}
        />
        {this.state.people.map(person => (
          <ul key={person.name}>
            <li>{person.name}</li>
          </ul>
        ))}
      </form>
    );
  }
}



import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            query: null,
            peoples: [],
        }
    }


    componentDidMount() {
        this.serachPeople(this.state.query);
    }

    onChange(e) {
        this.setState({ query: e.target.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.serachPeople(this.state.query);
                }
            } else {
                this.serachPeople(this.state.query);
            }
        })
    }

    serachPeople(query) {
        const url = "https://swapi.co/api/people/";

        if (query) {
            // if get value ion query so filter the data based on the query.
            fetch(url, {
                method: 'GET'
            }).then(results => {
                return results.json();
            }).then(data => {
                let peoples = data.results.filter(people => people.name === query).map((people) => {
                    return (
                        <ul key={people.name}>
                            <li>{people.name}</li>
                        </ul>
                    )
                })
                this.setState({ peoples: peoples });
                console.log("state", peoples)
            })
        } else {
            fetch(url, {
                method: 'GET'
            }).then(results => {
                return results.json();
            }).then(data => {
                let peoples = data.results.map((people) => {
                    return (
                        <ul key={people.name}>
                            <li>{people.name}</li>
                        </ul>
                    )
                })
                this.setState({ peoples: peoples });
                console.log("state", peoples)
            })
        }
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    className="search-box"
                    placeholder="Search for..."
                    onChange={this.onChange.bind(this)}
                />
                {this.state.peoples}
            </form>
        )
    }
}

export default Search;

