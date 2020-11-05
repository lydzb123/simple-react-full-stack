import React from 'react';

function ConfirmationPage (props){
return (
  <div>
    <h2>Order Summary:</h2>
    <li>{props.formData.name}</li>
    {console.log(props.formData)}


    <button onClick={props.onPurchase}>Purchase</button>
  </div>
)

}



export default ConfirmationPage;
// summarizes the data collected in the prior three steps.