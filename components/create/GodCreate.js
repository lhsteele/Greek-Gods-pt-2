import React from 'react';
import { Mutation } from 'react-apollo';

import Mutations from '../../client/graphql/mutations';
const { NEW_GOD } = Mutations;
import Queries from '../../client/graphql/queries';
const { FETCH_GODS } = Queries;


class GodCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      description: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e, newGod) {
    e.preventDefault();
    let name = this.state.name;

    newGod({
      variables: {
        name: name,
        type: this.state.type,
        description: this.state.description
      }
    }).then(data => {
      console.log(data);
      this.setState({
        message: `New god "${name}" create successfully`,
        name: "",
        type: "goddess",
        description: ""
      })
    }).then(() => this.props.history.push("/"));
  }

  updateCache(cache, { data: { newGod } }) {
    let gods;
    try {
      gods = cache.readQuery({ query: FETCH_GODS });
    } catch (err) {
      return;
    }
    
    if (gods) {
      let godArray = gods.gods;
  
      cache.writeQuery({
        query: FETCH_GODS,
        data: { gods: godArray.concat(newGod) }
      });
    }
  }

  render() {
    return (
      <Mutation
        mutation={NEW_GOD}
        update={(cache, data) => this.updateCache(cache, data)}  
      >
        {(newGod, {data}) => (
          <div>
            <form onSubmit={e => this.handleSubmit(e, newGod)}>
              <input 
                onChange={this.update("name")}
                value={this.state.name}
                placeholder="name" />
              <textarea
                onChange={this.update("description")}
                value={this.state.description} 
                placeholder="description" />
              <select 
                onChange={this.update("type")}>
                value="goddes">
                <option value="goddess">Goddess</option>
                <option value="god">God</option>
              </select>
              <button type="submit">Create God</button>
            </form>
            <p>{this.state.message}</p>
          </div>
        )}
      </Mutation>
    )
  }
}

export default GodCreate;