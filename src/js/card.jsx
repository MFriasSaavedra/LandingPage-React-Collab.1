
import react from 'react'

const Card = (props) => {
  return (

    <div className="card">
      <img src={props.url} className="card-img-top" style={{ width: '100%' }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
export default Card