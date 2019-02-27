import React, { Component } from 'react';
import Banner from '../components/banner';

class Step4WhatIDid extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Step 4 - What I did</h1>
        </section>
        <Banner headshot={true} color="#22b8cf" />
        <section>
          <p>
            When I got my Chase Sapphire Reserve, I was able to get my spending goal pretty easily.
            I did pay my rent with my card for one month just to push myself over the edge. I
            incurred a 3% fee for paying with a credit card, but compared to 100,000 Chase points,
            it was a no-brainer.
          </p>
          <p>
            Another time, when trying to get a sign-up bonus for a hotel card (which we&#x2019;ll
            talk about next), I was getting ready to move into my own apartment. I had been saving
            up for all the things I would need to make my new place liveable (furniture, small
            appliances, a TV, house decor, movers). I waited until around my moving day to apply
            for the new card, and then used it to buy all those things. I met my sign-up bonus
            very quickly. And again, I spent money naturally and according to my lifestyle.
          </p>
          <p>
            Now to our next subject!
          </p>
        </section>
      </>
    );
  }
}

export default Step4WhatIDid;
