import React, { Component } from 'react';
import Banner from '../components/banner';

class Step6 extends Component {
  static title = 'Step 6 - Now go have an adventure!';

  render() {
    return (
      <>
        <Banner icon={[ 'fas fa-plane', 'fas fa-train', 'fas fa-globe-americas' ]} color="#2086f3" />
        <section>
          <p>
            You have credit card points, hopefully enough for your plane ticket, and you have some
            hotel points, enough for some or all of your lodging.
          </p>
          <p>
            Now go book your trip!
          </p>
        </section>
      </>
    );
  }
}

export default Step6;
