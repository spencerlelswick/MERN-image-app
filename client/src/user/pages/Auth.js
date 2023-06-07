import './Auth.css'
import Card from '../../shared/components/UIElements/Card'
import Button from '../../shared/components/FormElements/Button'
import Input from '../../shared/components/FormElements/Input'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../shared/util/validators'

import { useForm } from '../../shared/hooks/form-hook'

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  )

  return (
    <Card className='authentication'>
      <h2>Login</h2>
      <hr />
      <form>
        <Input
          element='input'
          type='email'
          label='E-mail'
          id='email'
          validators={[VALIDATOR_EMAIL()]}
          errorText='Please enter a valid email'
          onInput={inputHandler}
        />
        <Input
          element='input'
          type='password'
          label='Password'
          id='password'
          validators={[VALIDATOR_MINLENGTH()]}
          errorText='Please enter a valid password with at least 5 characters'
          onInput={inputHandler}
        />
        <Button type='submit' disable={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  )
}
export default Auth
