import React, { Component } from 'react';
import Banner from '../components/banner';

class Step1Continued extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Step 1 - Credit card rewards programs (continued)</h1>
        </section>
        <Banner icon="fas fa-money-bill-alt" color="#2086f3" />
        <section>
          <p>
            To get back to points, all of the mentioned cards have &#x201C;sign-up bonuses&#x201D;
            that are only available to new card members. A sign-up bonus will reward you with a
            very large amount of points after you spend a certain dollar amount on your new credit
            card within a certain time frame. At the time of this writing, the Chase Sapphire
            Preferred and Reserve will both award you with 50,000 points if you spend $4,000 on
            your card within the first three months of being approved.
          </p>
          <p>
            Now for the big question? With all the talk of points and earning points, what exactly
            are points used for? Why pick points first over cash-back or airline miles?
          </p>
          <p>
            Cash-back and airline miles are usually just that, cash back that shows up on your
            credit card statement, and miles that you accrue with an airline company.
          </p>
          <p>
            Points are different in that they are dynamic. You can trade them for cash-back, if
            that&#x2019;s what you want, or trade them for airline miles, or hotel points, or
            other things that the credit card bank offers. They can be whatever you want them to
            be at the time you trade them.
          </p>
          <p>
            One major rule to know about points: when they&#x2019;re traded for any kind of
            redemption, they can&#x2019;t be traded back. It&#x2019;s a one way street.
          </p>
          <p>
            Second rule: some types of trades are better than others. Typically, trading points
            for cash-back is one of the worst options. For Chase, each point is converted into 1
            penny and then used as statement credit. Trading points for miles or hotel points
            usually nets you much more monetary value than 1 penny per point.
          </p>
        </section>
      </>
    );
  }
}

export default Step1Continued;
