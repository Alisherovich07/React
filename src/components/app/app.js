import { Component, useState } from 'react' 
import AppInfo from "../app-info/app-info"
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import {v4 as uuidv4} from 'uuid'

import './app.css'

const App = () => {
  const [data, setData] = useState([
    { name: 'Empire of osman' , viewers: 988, favourite: false, like: false, id: 1 },
    {name: 'Avengers', viewers: 789, favourite: false  , like: false, id: 2},
    {name: 'Kapitan Marvel', viewers:1091, favourite: false, like: false, id: 3},
  ])

  const onDelete = id => {
    const newArr = data.filter(c => c.id === id)
    setData(newArr)
  }

  const addForm = item => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4 (), favourite: false, like: false}
    const newArr = [...data , newItem]
    setData(newArr)
  }
}

class App extends Component {

  addForm =  item => {
    const newItem = {name: item.name, viewers: item.viewers, id: uuidv4 (), favourite: false, like: false}                                                                                                                                                               
    this.setState(({data}) => ({
      data:  [...data, newItem],
      
    }))
  }

  onToggleFavourite = id => {
    this.setState(({ data }) => {
    const  newArr = data.map(item => {
      if(item.id === id){
        return {...item , favourite: !item.favourite}
      }
      return item 
    })

    return {
      data: newArr,
    }
  })
  }
  onToggleLike = id => {
    this.setState(({ data }) => {
    const  newArr = data.map(item => {
      if(item.id === id){
        return {...item , like: !item.like}
      }
      return item 
    })

    return {
      data: newArr,
    }
  })
  }
    



  render(){
    const { data } = this.state
    const allMoviesCount = data.length
    const allFavouriteCount = data.filter(c => c.favourite).length
    const allLikeCount = data.filter(c => c.like).length
    return ( 
      <div className="app font-monospace">
        <div className="content">
          <AppInfo allMoviesCount={allMoviesCount} allFavouriteCount={allFavouriteCount} allLikeCount={allLikeCount} />
          <div className='search-panel'>
           <SearchPanel />
           <AppFilter />
          </div>
          <MovieList onToggleFavourite={this.onToggleFavourite} onToggleLike={this.onToggleLike} data={data} onDelete={this.onDelete} />
          <MoviesAddForm addForm={this.addForm} />
        </div>
      </div>
    )
  }
  }

export default App