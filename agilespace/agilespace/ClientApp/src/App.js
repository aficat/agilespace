import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ListSpace } from './components/ListSpace';
import { FindSpace } from './components/FindSpace';
import { About } from './components/About';
import { Member } from './components/Member';
import { Dashboard } from './components/Dashboard';
import { test } from './components/test';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Terms } from './components/Terms';
import { AddListing } from './components/AddListing';
import { Admin } from './components/Admin';
import { Register } from './components/Register';
import { confirmationBooking } from './components/confirmationBooking';
import { slot } from './components/slot';
import { booking } from './components/booking';

export default class App extends Component {
  displayName = App.name

  render() {
      return (
          <Layout>
              <Route exact path='/' component={Home} />
              <Route path='/findspace' component={FindSpace} />
              <Route path='/listspace' component={ListSpace} />
              <Route path='/about' component={About} />
              <Route path='/member' component={Member} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/test' component={test}/>
            <Route path='/privacypolicy' component={PrivacyPolicy}/>
            <Route path='/terms' component={Terms}/>
            <Route path='/addlisting' component={AddListing}/>
            <Route path='/admin' component={Admin}/>
              <Route path='/register' component={Register}/>
              <Route path='/confirmationBooking' component={confirmationBooking}/>
              <Route path='/slot' component={slot}/>
              <Route path='/booking' component={booking}/>
        </Layout>
    );
  }
}
