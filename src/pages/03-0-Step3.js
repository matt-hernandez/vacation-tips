import React, { Component } from 'react';
import Banner from '../components/banner';


class Step3 extends Component {
  static title = 'Step 3 - Now apply for your card';

  render() {
    return (
      <>
        <Banner icon="fas fa-credit-card" color="#4c6ef5" />
        <section>
          <p>
            So by now you&#x2019;ve got a sense of credit card reward programs, which airlines
            they&#x2019;re partnered with, which airlines can take you to your destination, and how
            to possibly squeeze out one or two extra points nearby your destination for either no
            cost or a reduced cost.
          </p>
          <p>
            You can now get the card that is right for you. But once you send that credit card
            application, and hopefully see that approval message, you&#x2019;re in the game.
            And we need to set you up for success.
          </p>
        </section>
      </>
    );
  }
}

export default Step3;
