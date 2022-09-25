import React from "react";

function Transaction({ date, description, category, amount, id }) {
  const url = `http://localhost:8001`

  function onDelete(id) {
    fetch(`${url}/transactions/${id}`, {
      method: "DELETE",
      headers: {'Content-Type': "application/json"}
  })
  .then(() => console.log('deleting the transaction'))
  .then(() => window.location.reload())
}
  return (
    <tr>
      <td>{ date }</td>
      <td>{ description }</td>
      <td>{ category }</td>
      <td>{ amount }</td>
      <td><button onClick={() => onDelete(id)}>Delete</button></td>
      
    </tr>
  );
}

export default Transaction;
