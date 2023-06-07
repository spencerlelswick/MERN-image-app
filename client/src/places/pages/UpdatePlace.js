import { useParams } from 'react-router-dom'
import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators'

import { useForm } from '../../shared/hooks/form-hook'
import { useEffect } from 'react'
import Card from '../../shared/components/UIElements/Card'

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'empire state building',
    description: 'famous big building and stuff',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '1234 State street',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },

  {
    id: 'p1',
    title: 'empiasdfasdfing',
    description: 'famasdfasdfg and stuff',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
    address: '1234 State street',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
]

const UpdatePlace = () => {
  const placeId = useParams().placeId

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId)

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      )
    }
  }, [setFormData, identifiedPlace])

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formState.inputs)
  }

  if (!identifiedPlace) {
    return (
      <div className='center'>
        <Card>Could not find place!</Card>
      </div>
    )
  }

  if (!formState.inputs.title.value) {
    return <div>no form state</div>
  }

  return (
    <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
      <Input
        id='title'
        element='input'
        type='text'
        label='title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please at least 5 characters'
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type='submit' disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  )
}
export default UpdatePlace
