import React, { Component } from 'react';
import Banner from '../components/banner';

class Step2 extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Step 2 - Credit card points to miles</h1>
        </section>
        <Banner icon={[ 'far fa-credit-card', 'fas fa-plane' ]} color="#4c6ef5" />
        <section>
          <p>
            As stated before, credit card reward points can be traded for multiple things, and one
            of the biggest things they can be traded for is airline miles. But as we can already
            tell from how dense things have gotten, there are some things to know beforehand.
          </p>
          <p>
            For one, Chase and Amex are both partnered up with their own choice of airlines. If
            you have a preferred airline, you should do a search to see if either Chase or Amex
            have partnered up with your airline. Factor that into your decision of which bank will
            be your credit card rewards program.
          </p>
          <p>
            Another caveat to know is that points don&#x2019;t always transfer to airline miles at
            a 1 to 1 ratio. Depending on the airline, you could get more or less miles when you
            trade your points. You can do a quick Google search to see each credit card rewards
            program&#x2019;s &#x201C;Rewards Chart&#x201D; and the break down of how points are
            traded.
          </p>
          <p>
            If you don&#x2019;t have a preferred airline, now comes the time where you&#x2019;ll
            develop one. And that information will be based on what we review next.
          </p>
        </section>
      </>
    );
  }
}

export default Step2;
