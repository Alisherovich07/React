import './app-info.css'

const AppInfo = ({ allMoviesCount, allFavouriteCount, allLikeCount }) => {
  return (
    <div className='app-info'>
      <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMoviesCount} </p>
      <p className='fs-4 text-uppercase'>Sevimli kinolar: {allFavouriteCount} </p>
      <p className='fs-4 text-uppercase'>Yoqtirilgan kinolar: {allLikeCount} </p>
    </div>
  )
}

export default AppInfo