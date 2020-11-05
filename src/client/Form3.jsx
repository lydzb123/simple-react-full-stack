import React from 'react';

function Form3(props) {
    return (
      <div>
        <h1>Form3: Billing Info</h1>
        <form onSubmit={props.onNext}>

        <label>Credit Card Number:
        <input type="text" name="creditcardnumber" value={props.formData.creditcardnumber} onChange={(e) => {props.handleInput}}/></label>

        <label>Expiration Date:
        <input type="text" name="exp" value={props.formData.exp} onChange={(e) => {props.handleInput}}/></label>

        <label>CVV:
        <input type="text" name="cvv" value={props.formData.cvv} onChange={(e) => {props.handleInput}}/></label>

        <label>Billing Zipcode:
        <input type="number" name="billingzip" value={props.formData.billingzip} onChange={(e) => {props.handleInput}}/></label>

        <input type="submit" value="Next"/>

      </form>


      </div>
    )
}

export default Form3;