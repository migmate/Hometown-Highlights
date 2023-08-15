import React, { Component } from 'react';


// TextInANest is a class-based React component that displays a title and body of text.
class TextInANest extends Component {
  // The component's state is initially set to include a title and body text.
  state = {
    titleText: "Flckr-Facebook Mashup",
    bodyText: 'This react application is a web mashup of two apis. This application uses facebook authentication, requests a users hometown and then shows the top 50 images from flickr pertaining to the users hometown. The purpose of the app is show to cool images of where a user is from.',
  };

  // The render method returns a div containing the title and body text from the state.
  render() {
    return (
      <div style={styles.baseText}>
        <h1 style={styles.titleText}>
          {this.state.titleText}  
        </h1>
        <p>{this.state.bodyText}</p>  
      </div>
    );
  }
}




// Styles object for styling the text.
const styles = {
  baseText: {
    fontFamily: 'Cochin',  
  },
  titleText: {
    
    fontSize: '30px',
    margin: "0px",  
    fontWeight: 'bold',  
  },
};

export default TextInANest;
