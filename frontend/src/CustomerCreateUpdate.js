import  React, { Component } from  'react';
import  CustomersService  from  './CustomerService';

const  customer_service  =  new  CustomersService();

class  CustomerCreateUpdate  extends  Component {
	constructor(props) {
		super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    componentDidMount(){
        const { match: { params } } =  this.props;
        if(params  &&  params.pk)
        {
            customer_service.getCustomer(params.pk).then((c)=>{
                this.customer_first_name.value  =  c.first_name;
                this.customer_last_name.value  =  c.last_name;
                this.customer_email.value  =  c.email;
                this.customer_language.value  =  c.language;
            })
        }
    }

    handleCreate(){
        customer_service.createCustomer(
            {
            "first_name":  this.customer_first_name.value,
            "last_name":  this.customer_last_name.value,
            "email":  this.customer_email.value,
            "language":  this.customer_language.value,
            }).then((result)=>{
                    alert("Customer created!");
            }).catch(()=>{
                    alert('There was an error! Please re-check your form.');
            });
    }

    handleUpdate(pk){
        customer_service.updateCustomer(
            {
            "pk":  pk,
            "first_name":  this.customer_first_name.value,
            "last_name":  this.customer_last_name.value,
            "email":  this.customer_email.value,
            "language":  this.customer_language.value,
            }
            ).then((result)=>{
                
                alert("Customer updated!");
            }).catch(()=>{
                alert('There was an error! Please re-check your form.');
            });
        }

    handleSubmit(event) {
        const { match: { params } } =  this.props;
        if(params  &&  params.pk){
            this.handleUpdate(params.pk);
        }
        else
        {
            this.handleCreate();
        }
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>
              First Name:</label>
              <input className="form-control" type="text" ref='firstName' />
            
            <label>
              Last Name:</label>
              <input className="form-control" type="text" ref='lastName'/>
            
            <label>
              Email:</label>
              <input className="form-control" type="text" ref='email' />
            
            <label>
              Language:</label>
              <input className="form-control" type="text" ref='language' />

            <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        );
  }

}
export default CustomerCreateUpdate;