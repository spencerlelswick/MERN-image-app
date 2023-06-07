import './PlaceList.css'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='place-list center'>
        <Card>
          <h2>No place found. Please create one.</h2>
          <button>Share place</button>
        </Card>
      </div>
    )
  }

  return (
    <ul className='place-list'>
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.image}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          ></PlaceItem>
        )
      })}
    </ul>
  )
}
export default PlaceList
