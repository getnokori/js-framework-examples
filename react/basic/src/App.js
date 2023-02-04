import React, { useState, useEffect } from "react";
import LolaDB from '@loladb/sdk-js';
import './App.css';
const lola = new LolaDB(process.env.REACT_APP_LOLA_API_KEY);

function App() {
  const [loadingData, setLoadingData] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const {
        data: results, 
        error
      } = await lola.query.execute({
          queryId: '{{YOUR_QUERY_ID}}'
        })

      if (error) {
        console.error(error);
      }

      if(results && !error) {
        setData(results);
        setLoadingData(false);
      }
    }
    
    if (loadingData) {
      getData();
    }
  });

  return (
    <div className="App">
      <h1>React lolaDB Example</h1>
      <p>
        In this fictitious example, we are fetching customer orders from our database of soda orders at
        our soda shop.
      </p>
      <h2>Orders list</h2>
      {/* here you check if the state is loading otherwise if you wioll not call that you will get a blank page because the data is an empty array at the moment of mounting */}
      {
        loadingData && !data ? (
          <p>Loading Please wait...</p>
        ) : (
        // <Table columns={columns} data={data} />
        <table>
          <thead>
          <tr>
            <th>Order ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Customer Id</th>
          </tr>
          </thead>
          <tbody>
          { 
          !loadingData && data.map((order) => {
            return <tr key={order.orderId}>
              <td>{order.orderId}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.customerId}</td>
            </tr>
          })
          }
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
