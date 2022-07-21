import {useParams} from 'react-router-dom'

function Detail(props) {
  let {id} = useParams()
  id = Number(id)
  console.log(typeof id)
    return(
      <div className="list_con">
          <p>{props.shoes[id].title}</p>
          <img src={'/img/product0' + (id+1) + '.jpg'}/>
          <p>{props.shoes[id].price} &#8361;</p>
      </div>
    )
  }

export default Detail