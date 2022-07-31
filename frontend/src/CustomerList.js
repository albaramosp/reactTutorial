import  React, { Component } from  'react';
import  CustomersService  from  './CustomerService';

const  customer_service  =  new  CustomersService();
class  CustomersList  extends  Component {

	constructor(props) {
		super(props);
		this.state  = {
			customers: [],
			next_page_url:  ''
		};
		this.next_page  =  this.next_page.bind(this);
		this.handleDelete  =  this.handleDelete.bind(this);
	}

    componentDidMount() {
        var  self  =  this;
        customer_service.getCustomers().then(function (result) {
            self.setState({ customers:  result.data, next_page_url:  result.nextlink})
        });
    }

    handleDelete(e,pk){
        var  self  =  this;
        customer_service.deleteCustomer({pk :  pk}).then(()=>{
            var  newArr  =  self.state.customers.filter(function(obj) {
                return  obj.pk  !==  pk;
            });
            self.setState({customers:  newArr})
        });
    }

    next_page(){
        var  self  =  this;
        customer_service.getCustomersByURL(this.state.next_page_url).then((result) => {
            self.setState({ customers:  result.data, next_page_url:  result.nextlink})
        });
    }

    render() {

        return (
        <div  className="customers--list">
            <table  className="table">
                <thead  key="thead">
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Language</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.state.customers.map( c  =>
                    <tr  key={c.pk}>
                        <td>{c.pk}  </td>
                        <td>{c.first_name}</td>
                        <td>{c.last_name}</td>
                        <td>{c.email}</td>
                        <td>{c.language}</td>
                        <td>
                        <button  onClick={(e)=>  this.handleDelete(e,c.pk) }> Delete</button>
                        <a  href={"/customer/" + c.pk}> Update</a>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            <button  className="btn btn-primary"  onClick=  {  this.next_page  }>Next</button>
        </div>
        );
    }
}
export  default  CustomersList;