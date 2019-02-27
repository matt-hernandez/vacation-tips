import React, { Component } from 'react';
import Banner from '../components/banner';

class Step5WhatIDid extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Step 5 - What I did</h1>
        </section>
        <Banner headshot={true} color="#22b8cf" />
        <section>
          <p>
            I applied for a Marriott Rewards card after I got my Chase Sapphire Reserve bonus and
            after I waited for four months. I got a very significant sign up bonus that equated to
            five nights stay in a middle-grade hotel.
          </p>
          <p>
            I also took a little more risk that I don&#x2019;t advise people do. I applied for a
            second hotel credit card four months after the Marriott card. This one was the Starwood
            Amex card. This card did not get me Amex rewards points. It got me points with the
            Starwood hotel brand. Marriott and Starwood merged shortly before I got this card. So
            when I got my sign-up bonus with Starwood, I was able to transfer those points to
            Marriott and get four more nights in a middle-grade hotel.
          </p>
          <p>
            The downside to this was I had too many credit cards open and my credit score did take
            a small dip. Thankfully, this was the last card I planned to get and I wasn&#x2019;t
            planning on making any large purchases like a house, car, or loan very soon. Once I
            transferred the points, I cancelled the card and was satisfied with what I got.
          </p>
        </section>
      </>
    );
  }
}

export default Step5WhatIDid;
