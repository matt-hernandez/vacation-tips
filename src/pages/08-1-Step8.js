import React, { Component } from 'react';
import Banner from '../components/banner';
import Link from '../components/link';

class Step8 extends Component {
  static title = 'Step 8 - Airplane credit cards (extra credit)';

  render() {
    return (
      <>
        <Banner icon="fas fa-plane" color="#22b8cf" />
        <section>
          <p>
            Several months after my trip was over, I decided that I wanted to get a little more
            loyalty with United and also start building some miles towards another trip abroad in
            two years.
          </p>
          <p>
            So I applied for the <Link
              href="https://www.referyourchasecard.com/217/JOXQOLVIGS">Chase United Explorer</Link> card.
            By this time, I had already closed out
            the hotel cards, so I only had my <Link
              href="https://www.referyourchasecard.com/6/Q69RWB34CF">Chase Sapphire Preferred</Link>.
            I had plenty of time and room for this card to enter into my wallet.
          </p>
          <p>
            I was able to meet the sign-up bonus in about two months, and I got 40,000 miles out of
            the deal, which is two-thirds of the way to another Europe round trip flight. I also
            have some great airline perks that I&#x2019;ll be able to use next time I fly with them
            (priority boarding, lounge access, free checked bag).
          </p>
          <p>
            After the bonus, I put several monthly bills on the card and plan on keeping it with me
            for some time. I earn enough on it to justify the annual fee. And my miles with United
            rely on me being a continual earner. Like I said before, the card doesn&#x2019;t
            weigh me down.
          </p>
        </section>
      </>
    );
  }
}

export default Step8;
