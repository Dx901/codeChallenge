import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [search, setSearch] = useState("")
  const url = 'http://localhost:8001'
  const [data, setData] = useState([])

  useEffect(() => {getData()} ,[]) 
  console.log(data)
  const getData = async () => {
    
    try {
      fetch(`${url}/transactions`)
        .then((response) => response.json ())
        .then((result) => setData(result)) 
        if (search !== "") {
          searchHandler()
        } 
    } catch (error) {
      console.log(error)
      
    }
  }

  function sendData(dataToSend) {
    fetch(`${url}/transactions`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(dataToSend)
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .then(() => window.location.reload())
  }

  function handleChange(e) {
    setSearch(e.target.value)
    searchHandler()
    
  }

  function searchHandler() {
    const filteredData =  data.filter((transactions) => {
      let description = transactions.description.toLowercase()
      let category = transactions.category.toLowercase()
      let filter = filter.toLowercase()
      //let amount = transactions.amount

      return description.includes(filter) || category.includes(filter)
    })
    setData(filteredData)

    
  }

  return (
    <div>
      <Search handleChange={handleChange}/>
      <AddTransactionForm addTransaction={sendData}/>
      <TransactionsList transactions={data} />
    </div>
  );
}
export default AccountContainer;
