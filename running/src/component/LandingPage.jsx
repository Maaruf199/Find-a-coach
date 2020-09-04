import React, { Component } from 'react'
import "../index.css"

export default class LandingPage extends Component {
    render() {
        return (
          <>
              <div class="landing-div">
                <div class="intro-section section d-flex container-fluid">
                  <div class="row">
                    <div class="align-self-center col-7 mx-auto">
                      <h2 class="pb-5 intro-header">Need a coach?</h2>
                      <img className="rounded-circle coach" src={"http://www.animationcontinent.com/wpimages/wp71f45a40.gif"} alt="Coach"/>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-around">
                <div class="p-2">Browse coach profiles</div>
                <div class="p-2">Contact Coach</div>
                <div class="p-2">Meet your coach</div>
              </div>
          </>    
        )
    }
}
