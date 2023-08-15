import React, { Component } from 'react';
import FacebookLogin from './facbook-com'
import FlickrGallery from './flickr-gallery'
import AboutDetail from './about-detail'

// Nav is a class-based component that navigates between the Home and About pages.
export default class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 'About',
        searchTerm: '',
      };
    }
  
    // openPage changes the current page based on user interaction.
    openPage = (pageName) => {
      this.setState({ currentPage: pageName });
    }
  
    // renderPageContent renders the content of the current page.
    renderPageContent() {
      switch (this.state.currentPage) {
        case 'Home':
          return (
            <React.Fragment>
              <FacebookLogin updateSearchTerm={this.updateSearchTerm} />
              <FlickrGallery searchTerm={this.state.searchTerm} />
            </React.Fragment>
          );
        case 'About':
          return <AboutDetail/>;
        default:
          return null;
      }
    }

    // updateSearchTerm updates the searchTerm in the state.
    updateSearchTerm = (searchTerm) => {
      this.setState({ searchTerm });
    }
    
    // The render method returns the whole component.
    render() {
      return (
        <div>
          <button className="tablink" onClick={() => this.openPage('Home')}>Home</button>
          <button className="tablink" onClick={() => this.openPage('About')}>About</button>
          <div className="fb-login-container">
          </div>
          <div className="tabcontent">
            {this.renderPageContent()}
          </div>
        </div>
      );
    }
}
