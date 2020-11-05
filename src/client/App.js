import React, { Component } from 'react';
import Form from './Form.jsx';
import Form2 from './Form2.jsx';
import Form3 from './Form3.jsx';
import ConfirmationPage from './ConfirmationPage.jsx';
import $ from 'jquery';



export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      form1: false,
      form2: false,
      form3: false,
      confirmation: false,
      formData: {
        name: null,
        email: null,
        password: null,
        line1: null,
        line2: null,
        city: null,
        state: null,
        zipcode: null,
        phonenumber: null,
        creditcardnumber: null,
        exp: null,
        cvv: null,
        billingzip: null
      }
    };
    this.onNext = this.onNext.bind(this);
    this.onPurchase = this.onPurchase.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.collectForm = this.collectForm.bind(this);

  }

  handleInputChange = (e) => {
    e.preventDefault;
    this.setState({
      formData.[e.target.name] = e.target.value;
    })
  };


  collectForm = (e) => {
    e.preventDefault();
    const data = this.state.formData;
    console.log(data);
  }

  onNext(e) {
    //conditional form rendering
    let {form1, form2, form3} = this.state;
    if (!form1 && !form2 && !form3) {
      this.setState({
        form1: true
    })
    }

    if (form1 && !form2) {
      this.setState({
        form1: false,
        form2: true
      })
    }

    if (form2) {
      this.setState({
        form2: false,
        form3: true
      })
    }

    if (form3) {
      this.setState({
        form3: false,
        confirmation: true
      })
    }
  e.preventDefault();
  }

  onPurchase() {
      //send summary back to page

    $.post('/confirmation', (data) => {
      //upon success send form data to db??
    });

    this.setState({
      confirmation: false
    })
  }

  render() {
    const {form1, form2, form3, confirmation} = this.state;
    return (
      <div>
        <h1>Multistep Checkout</h1>
        <button onClick={this.onNext}>Checkout</button>
        {form1 && <Form onNext={this.onNext} formData={this.state.formData} handleInput={this.handleInputChange}/>}
        {form2 && <Form2 onNext={this.onNext} formData={this.state.formData} handleInput={this.handleInputChange}/>}
        {form3 && <Form3 onNext={this.onNext}formData={this.state.formData} handleInput={this.handleInputChange}/>}
        {confirmation && <ConfirmationPage onPurchase={this.onPurchase} collectForm={this.collectForm}/>}
      </div>
    );
  }
}
