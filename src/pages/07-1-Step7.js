import React, { Component } from 'react';
import Banner from '../components/banner';
import Link from '../components/link';

class Step7 extends Component {
  static title = 'Step 7 - After the trip';

  render() {
    return (
      <>
        <Banner icon="far fa-smile" color="#22b8cf" />
        <section>
          <p>
            So you went to a few places in the world, burned up some points and miles, and stayed
            in some good hotels. Now what?
          </p>
          <p>
            Take a look at the cards you have. Can you keep enough activity on all of them to
            justify keeping them (and possibly paying annual fees on them every year)? If so,
            keep them. If not, find which ones are worth your time and close the rest.
          </p>
          <p>
            For me, I closed my hotel cards, but I kept my <Link
              href="https://www.referyourchasecard.com/6/Q69RWB34CF">Chase Sapphire Preferred</Link>.
            I put almost everything on it to this day and earn a good amount of points with it
            every month.
          </p>
          <p>
            You may also decide that you want to branch out a bit. If you earned
            sign-up bonuses on your cards and came away satisfied and relatively unscathed, you
            now have good practice on using credit cards responsibly in general. So maybe you can
            go for another card, possibly unrelated to travel.
          </p>
          <p>
            Have you been eyeing a cash-back card with a decent sign-up bonus? See if you can
            factor it into your life. Or maybe you really like the airline you flew on and you
            want to sign-up for a card with them and get some bonus miles. Maybe check it out and
            see if you really want it.
          </p>
          <p>
            Just don&#x2019;t overdo it. Like with all things, moderation is healthy. Don&#x2019;t
            apply for too many credit cards too close together, and try not to have too many open
            credit cards in general. A good rule of thumb is this: a credit card shouldn&#x2019;t
            weigh you down. If you feel like you&#x2019;re spread too thin, stop and/or cancel
            some cards.
          </p>
          <p>
            And speaking of airline cards&#x2026;
          </p>
        </section>
      </>
    );
  }
}

export default Step7;
