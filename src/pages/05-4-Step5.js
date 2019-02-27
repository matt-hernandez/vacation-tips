import React, { Component } from 'react';
import Banner from '../components/banner';

class StepP5WhatIDid extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Step 5.5 - What I did</h1>
        </section>
        <Banner headshot={true} color="#22b8cf" />
        <section>
          <p>
            I stayed at the Moxy hotels in Berlin and Amsterdam. These are trendy, modern hotels
            that are quite nice and very affordable when it comes to using points. With the points
            I got from my Marriott card and my Starwood card, I was able to stay in Berlin and
            Amsterdam completely with points. I was able to use the fifth night free perk in
            Amsterdam, as well.
          </p>
        </section>
      </>
    );
  }
}

export default StepP5WhatIDid;
