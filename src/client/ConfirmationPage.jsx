import React from 'react';

function ConfirmationPage (props){
return (
  <div>
    <h2>Order Summary:</h2>

    <button onClick={props.onPurchase}>Purchase</button>
  </div>
)

}



export default ConfirmationPage;
// summarizes the data collected in the prior three steps.