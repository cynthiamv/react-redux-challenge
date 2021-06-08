import React from 'react';
import { useSelector } from 'react-redux';
import TableRow from '../table-row/TableRow.jsx';
import { DotsIcon, TableStyled } from './UsersList.style';

const UsersList = () => {
  const data = localStorage.state && JSON.parse(localStorage.state).formReducer.users
  
  const formData = useSelector(state => state.formReducer);

  return(
    (formData && localStorage.state && data.length) ?
    <TableStyled>
      <thead>
        <tr>
          <th scope="col" className="table-headers"><DotsIcon /><p>NAME</p></th>
          <th scope="col" className="table-headers"><DotsIcon /><p>COUNTRY</p></th>
          <th scope="col" className="table-headers"><DotsIcon /><p>BIRTHDAY</p></th>
        </tr>
      </thead>
      <tbody>
        {localStorage.state && data.map((user, i) => 
          <TableRow key={i} name={user.name} country={user.country} birthday={user.birthday} />)
        }
        
      </tbody>
    </TableStyled>
    : null
  )
}

export default UsersList;