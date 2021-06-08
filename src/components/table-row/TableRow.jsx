import React from 'react';
import { TableRowStyled } from './TableRow.style';

const TableRow = ({ name, country, birthday }) => {
  const getFullDate = dateString => {
    const date = new Date(dateString);
    const day = date.toLocaleString("en-US", {day: "numeric"});
    const month = date.toLocaleString("en-US", {month: "numeric"});
    const year = date.toLocaleDateString("en-US", {year: "numeric"});

    return `${day}/${month}/${year}`;
  }

  const birthdayFormatted = getFullDate(birthday);

  return (
    <TableRowStyled>
      <td className="user-data"><p>{name}</p></td>
      <td className="user-data"><p>{country}</p></td>
      <td className="user-data"><p>{birthdayFormatted}</p></td>
    </TableRowStyled>
  )
}

export default TableRow;