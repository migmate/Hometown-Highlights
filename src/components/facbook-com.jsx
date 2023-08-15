import React, { useEffect, useState } from 'react';

const FacebookLogin = (props) => {
  const [user, setUser] = useState(null);

  // Initialises the Facebook login on component mount, or sets up the initialization
  // to occur when the Facebook SDK is loaded if it isn't already.
  useEffect(() => {
    if (window.FB) {
      initFacebookLogin();
    } else {
      window.fbAsyncInit = () => {
        initFacebookLogin();
        window.FB.XFBML.parse();
      };
    }
  }, []);

  // Initialises Facebook login. Sets up an event subscription for when the login status changes.
  const initFacebookLogin = () => {
    window.FB.init({
      appId: '240123831967076',
      cookie: true,
      xfbml: true,
      version: 'v17.0'
    });

    window.FB.Event.subscribe('auth.statusChange', response => {
      if (response.authResponse) {
        getUserInfo();
      }
    });
  };

  // Fetches user info from the Facebook API, sets the user state, and updates
  // the search term based on the user's hometown.
  function getUserInfo() {
    window.FB.api('/me', { "fields": "id,name,hometown" }, function (response) {
      setUser(response);
      const searchTerm = response.hometown.name;
      props.updateSearchTerm(searchTerm);  
      console.log(searchTerm)
    });
  }

  // Renders the component
  return (
    <div>
      <div className="fb-login-button" data-width="" data-size="" data-button-type="" data-layout="" data-auto-logout-link="true" data-use-continue-as="false"></div>
    </div>
  );
};

export default FacebookLogin;
