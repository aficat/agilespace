import React from 'react';
import {Tabs, Tab, ListGroup, ListGroupItem} from 'react-bootstrap';

class Review extends React.Component {

    render() {

        var currentUser = sessionStorage.getItem('userData'); //returns string 
        var userData = JSON.parse(currentUser); //parse to JSON object
      //  console.log(userData);
        var userFeedbacks = userData.feedbacks; //retrieve user's feedbacks
     //   console.log(userFeedbacks);
        var numFeedbacks = userFeedbacks.length; 
     //  console.log(numListings);


        return (
            <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                <Tab eventKey={1} title="Reviews By You">
                    Tab 1 content
  </Tab>
  <Tab eventKey={2} title="Review About You">
<ListGroup>
                      <ListGroupItem>
                            <h1>{userFeedbacks.feedbacker}</h1> 
                            <p>{userFeedbacks.remarks}</p>
                            <p>{userFeedbacks.rating}</p>
                            <p>{userFeedbacks.postingDateTime}</p>

                          </ListGroupItem>
  <ListGroupItem>Item 2</ListGroupItem>
  <ListGroupItem>...</ListGroupItem>
</ListGroup>
    </Tab>
</Tabs>
    );
  }
}

export default Review;
