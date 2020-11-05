import React from 'react';

function Form(props) {
    return (
      <div>
        <h1>Form2: Shipping Info</h1>
        <form onSubmit={props.onNext}>

        <label>Line1:
        <input type="text" name="line1" value={props.formData.line1} onChange={(e) => {props.handleInput}}/></label>

        <label>Line2:
        <input type="text" name="line2" value={props.formData.line2} onChange={(e) => {props.handleInput}}/></label>

        <label>City:
        <input type="text" name="city" value={props.formData.city} onChange={(e) => {props.handleInput}}/></label>

        <label>State:
        <input type="text" name="state" value={props.formData.state} onChange={(e) => {props.handleInput}}/></label>

        <label>Zipcode:
        <input type="number" name="zipcode" value={props.formData.zpcode} onChange={(e) => {props.handleInput}}/></label>

        <label>Phone Number:
        <input type="text" name="phonenumber" value={props.formData.phonenumber} onChange={(e) => {props.handleInput}}/></label>

        <input type="submit" value="Next"/>

      </form>


      </div>
    )
}

export default Form;