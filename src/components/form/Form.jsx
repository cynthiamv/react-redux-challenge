import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser} from '../../redux/actions';
import Input from '../input/Input';
import Select from '../select/Select';
import { FormStyled } from './Form.style';

const Form = () => {
  const [showMesssage, setShowMessage] = useState(false);

  const dispatch = useDispatch(); 
  const formData = useSelector(state => state.formReducer);

  const calculateAge = (birthday) => {
    const ageDifMs = Date.now() - new Date(birthday).getTime();
    const ageDate = new Date(ageDifMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970)
    return age
  }
  
  const getCurrentDate = () => {
    const todaysDate = new Date();
    const day = todaysDate.toLocaleString("en-US", {day: "numeric"});
    const month = todaysDate.toLocaleString("en-US", {month: "long"});
    return [day, month]
  }

  const handleSubmit = e => {
    e.preventDefault();
    const userCountry = e.target.country.value;
    const userName = `${e.target.firstName.value} ${e.target.lastName.value}`
    const userBirthday = e.target.birthday.value;

    const userAge = calculateAge(userBirthday)
    dispatch(addNewUser(userName, userCountry, userBirthday, userAge))
    setShowMessage(true);

    e.target.firstName.value = '';
    e.target.lastName.value = '';
    e.target.country.value = '';
    e.target.birthday.value = '';
  }
  
  const today = getCurrentDate();
  const userData = formData.users[formData.users.length-1]

  const message = `Hello ${userData.name} from ${userData.country}. On ${today[0]} of ${today[1]} you will have ${userData.age}`

  
  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input labelName="First Name" type="name" name="firstName" placeholder="John" />
      <Input labelName="Last Name" type="name" name="lastName" placeholder="Doe" />
      <Select labelName="Country" name="country" />
      <Input labelName="Birthday" type="date" name="birthday" />
      <div className="btn-container">
        <button type="submit">Save</button>
      </div>

      {
        showMesssage &&
        <div className="message">
          <p>{message}</p>
        </div>
      }
    </FormStyled>
  )
}

export default Form;