import React, { Component } from 'react';
import Banner from '../components/banner';

class Step1WhatIDid extends Component {
  static title = 'Step 1 - What I did';

  render() {
    return (
      <>
        <Banner headshot={true} color="#22b8cf" />
        <section>
          <p>
            You’ve heard me talk a lot about Chase in the past few paragraphs. If you haven&#x2019;t
            guessed, it&#x2019;s because I went with Chase instead of Amex. There were a few reasons
            for that.
          </p>
          <p>
            The first was that the Chase Sapphire Reserve, with its whopping $450 annual fee,
            offered a limited-time sign-up bonus of 100,000 points for spending $4,000 in the
            first three months. That kind of bonus was unheard of at the time and brought Chase a
            lot of publicity.
          </p>
          <p>
            Ultimately, paying $450 for that sheer mountain of points made sense. And I also
            made good use of all the other perks that came with the card initially (airport lounge
            access, Global Entry application reimbursement, and the $300 travel credit).
          </p>
          <p>
            I kept the card for almost a year. Once I saw that my renewal time was up, I decided
            that I didn&#x2019;t want to pay $450 again. I called Chase and had them downgrade
            my card to the Sapphire Preferred. I lost some great perks, but without a massive
            sign-up bonus to back it up, $450 was just too much.
          </p>
          <p>
            Today, the Chase Sapphire Reserve only offers a 50,000 point sign-up bonus.
            There&#x2019;s talk that they may do another 100,000 point sign-up promotion in the
            future, but I&#x2019;m not a fortune teller.
          </p>
          <p>
            All this said, just because I went with Chase doesn&#x2019;t mean you should.
            There&#x2019;s still one major thing we need to look at before we can definitively make
            a choice on which bank to join up with: your airline.
          </p>
        </section>
      </>
    );
  }
}

export default Step1WhatIDid;
