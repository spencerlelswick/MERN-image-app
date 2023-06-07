import './UserItem.css'
import Avatar from '../../shared/components/UIElements/Avatar'
import Card from '../../shared/components/UIElements/Card'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const UserItem = (props) => {
  return (
    <li className='user-item'>
      <div>
        <Link to={`/${props.id}/places`}>
          <Card className='user-item__content'>
            <div className='user-item__image'>
              <Avatar image={props.image} alt={props.name} />
            </div>
            <div className='user-item__info'>
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.placeCount === 1 ? 'Place' : 'Places'}
              </h3>
            </div>
          </Card>
        </Link>
      </div>
    </li>
  )
}
export default UserItem
