import React, { Component } from 'react';
import Banner from '../components/banner';

class Step5P5 extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Step 5.5 - Hotel rewards programs</h1>
        </section>
        <Banner icon="fas fa-bed" color="#20c997" />
        <section>
          <p>
            Just like airlines have perks with their rewards programs, so do hotels. I won&#x2019;t
            spend too much time in this area because, quite honestly, the perks are straightforward.
          </p>
          <p>
            Many hotels will have a &#x201C;free night&#x201D; reward as part of booking a hotel
            for a certain number of nights straight with points. Marriott has their notable
            &#x201C;fifth night free&#x201D; perk. When booking a hotel stay entirely with points,
            if you book for five nights, you&#x2019;ll only be charged the amount of points for
            four.
          </p>
          <p>
            Some hotel credit cards will also have an annual bonus of giving you a free
            night&#x2019;s stay on your credit card anniversary, so long as the card is still open.
            If you have the good fortune of applying for a hotel card early enough, you could use
            your free night on your trip.
          </p>
        </section>
      </>
    );
  }
}

export default Step5P5;
