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
        name: "",
        email: "",
        password: "",
        line1: "",
        line2: "",
        city: "",
        state: "",
        zipcode: "",
        phonenumber: "",
        creditcardnumber: "",
        exp: "",
        cvv: "",
        billingzip: ""
      }
    };

    this.onNext = this.onNext.bind(this);
    this.onPurchase = this.onPurchase.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(e) {
    var {formData} = this.state;
    formData[e.target.name] = e.target.value;

    this.setState({
      formData
    })
    e.preventDefault();

  };



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

  onPurchase(e) {
    //send summary back to page

    const data = this.state.formData;
    console.log(data);

    $.post('/confirmation', data, (data) => {
      console.log('good post');
    });

    this.setState({
      confirmation: false
    })

    e.preventDefault();
  }

  render() {
    const {form1, form2, form3, confirmation} = this.state;
    return (
      <div>
        <h1>Multistep Checkout</h1>
        <button onClick={this.onNext}>Checkout</button>
        {form1 && <Form onNext={this.onNext} formData={this.state.formData} handleInput={this.handleInputChange}/>}
        {form2 && <Form2 onNext={this.onNext} formData={this.state.formData} handleInput={this.handleInputChange}/>}
        {form3 && <Form3 onNext={this.onNext} formData={this.state.formData} handleInput={this.handleInputChange}/>}
        {confirmation && <ConfirmationPage onPurchase={this.onPurchase} formData={this.state.formData} />}
      </div>
    );
  }
}
