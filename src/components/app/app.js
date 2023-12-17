import { Component } from 'react' 
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'

import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:  [
        { name: 'Empire of osman' , viewers: 988, favourite: false, id: 1 },
        {name: 'Avengers', viewers: 789, favourite: false, id: 2},
        {name: 'Kapitan Marvel', viewers:1091, favourite: true, id: 3},
      ],
    }
  }
 

   onDelete = id => {
    this.setState(({ data }) => ({
      data: data.filter(c => c.id !== id)
    }))
  }

  render(){
    const { data } = this.state
    return ( 
      <div className="app font-monospace">
        <div className="content">
          <AppInfo />
          <div className='search-panel'>
           <SearchPanel />
           <AppFilter />
          </div>
          <MovieList data={data} onDelete={this.onDelete} />
          <MoviesAddForm />
        </div>
      </div>
    )
  }
  }

export default App