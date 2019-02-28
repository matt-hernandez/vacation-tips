import React, { Component } from 'react';
import Banner from '../components/banner';

class Step1 extends Component {
  static title = 'Step 1 - Credit card rewards programs';

  render() {
    return (
      <>
        <Banner icon="far fa-credit-card" color="#2086f3" />
        <section>
          <p>
            When I originally set out to see how I could get free (or mostly free) travel perks, I
            heard a lot of hype about two major credit card companies: Chase and American Express.
          </p>
          <p>
            Both of these companies have well-known and well-liked credit card rewards programs.
            Chase has their Ultimate Rewards program, and Amex has American Express Rewards (did it
            take them a long time to come up with that name?). Let&#x2019;s break down what a credit
            card rewards program is and how it differs from other things we&#x2019;ve heard of like
            cash-back or airline miles.
          </p>
          <p>
            A credit card rewards program is something you can become a member of by applying and
            being approved for a particular credit card with a bank. The banks in this case are
            Chase and Amex. Both banks have several cards that allow you to enter into the rewards
            program. The most popular cards with Chase are the Sapphire Preferred and the Sapphire
            Reserve. Amex has their Gold and Platinum cards.
          </p>
          <p>
            Every time you put on expenses on this card, the bank rewards you with points.
            Typically, you&#x2019;ll earn 1 point per dollar. So a $14.38 purchase will net you 14
            points.
          </p>
          <p>
            But sometimes the banks will give you more points based on what kind of purchase you
            made. For example, the Chase Sapphire Preferred rewards their credit card users 2x
            points on travel and dining purchases. So if your $14.38 was spent on a meal at a
            restaurant, you&#x2019;ll get 2 x 14 points, or 28 points.
          </p>
        </section>
        <Banner icon={[ 'fab fa-cc-visa', 'fab fa-cc-amex' ]} color="#2086f3" />
        <section>
          <p>
            Each card has certain advantages and disadvantages. For example, the Chase Sapphire
            Reserve has a 3x multiplier on travel and dining purchases, while the Chase Sapphire
            Preferred only has a 2x multiplier. But the Chase Sapphire Reserve also has a whopping
            $450 annual fee that is not waived the first year. If you get a Chase Sapphire
            Preferred, the annual fee is $0 the first year and only $95 after that.
          </p>
          <p>
            To make things a little more complicated, some credit cards will offer other unique
            bonuses outside of points. For example, in exchange for paying that giant $450 annual
            fee with the Chase Sapphire Reserve, you&#x2019;ll get an annual $300 travel credit that
            can be redeemed for lodging, paid parking, taxis and ride sharing, and some tourist
            booking websites. The Chase Sapphire Preferred does not have this perk at all. So that
            $450 fee starts to look a little more worth it.
          </p>
          <p>
            There are too many unique perks with cards to sum up here. Just know that each credit
            card will require some research. Take notes of the ones that match your affordability
            and lifestyle, but don&#x2019;t pick one yet.
          </p>
        </section>
      </>
    );
  }
}

export default Step1;
