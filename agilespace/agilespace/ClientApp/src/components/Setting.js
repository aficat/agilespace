import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

export class Setting extends Component {

    constructor() {
        super();

        this.state = {
            firstName: "",
            lastNmae: "",
            email: "",
            phoneNum: "",
            password: "",

        }
  this.handleChange = this.handleChange.bind(this);

    }

handleChange(event) {
    this.setState({firstName: event.target.value})
        this.setState({lastName: event.target.value})
this.setState({password: event.target.value})
this.setState({email: event.target.value})
this.setState({contact: event.target.value})

  }



        render() {
        var currentUser = sessionStorage.getItem('userData'); //returns string 
        var userData = JSON.parse(currentUser); //parse to JSON object
      
        return (
            <div>
                    <h4>Personal Information</h4>
                    <Form>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text" name="firstName" id="firstName" onChange={this.handleChange.bind(this)} defaultValue={userData.firstName}  />
                            </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input type="text" name="lastName" id="lastName" onChange={this.handleChange.bind(this)} defaultValue={userData.lastName}  />
                            </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" defaultValue={userData.password} />
                            </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email" id="email" defaultValue={userData.email} />
                            </FormGroup>
                           
                    <FormGroup>   
                        <Button type="update" onSubmit={this.handleSubmit}>Update</Button>
                        </FormGroup>


                    </Form>

                <h4> Payment Method </h4>

                    </div>
            );
}
}

export default Setting


