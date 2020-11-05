import React from 'react';

function Form(props) {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={props.onNext}>

        <label>Name:
        <input type="text" name="name" value={props.formData.name} onChange={props.handleInput}/></label>

        <label>Email:
        <input type="text" name="email" value={props.formData.email} onChange={props.handleInput} /></label>

        <label>Password:
        <input type="password" name="password" value={props.formData.password} onChange={props.handleInput}/></label>

        <input type="submit" value="Next"/>


      </form>




      </div>
    )
}

export default Form;