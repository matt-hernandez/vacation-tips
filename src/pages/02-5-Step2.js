import React, { Component } from 'react';
import Banner from '../components/banner';

class Step2P5WhatIDidContinued extends Component {
  static title = 'Step 2.5 - What I did (continued)';

  render() {
    return (
      <>
        <Banner headshot={true} color="#22b8cf" />
        <section>
          <p>
            I combined 1 stopover and 1 open-jaw with United. I flew from Houston to Ireland,
            stayed there for a week, then flew from Ireland to Berlin, spent 4 days in Berlin,
            then took the train from Berlin to Amsterdam for the last 5 days of my vacation. Then, I
            flew back to Houston from Amsterdam.
          </p>
          <p>
            All of that for 60,000 miles and around $50 worth of airline fees.
          </p>
          <p>
            I wish I could say it was as easy as just doing a multi-city search at United for these
            three destinations. But it wasn&#x2019;t. 60,000 miles is the bare minimum for a
            round-trip flight to Europe. But getting 30,000 miles going both ways was not always
            possible depending on what days I flew in and out. I had to tweak which days of the
            week I was leaving, and what time of day. I couldn&#x2019;t afford to be locked in to a
            set schedule, so I made sure to book this plane flight several months in advance. Enough
            time to get my PTO and other plans in order.
          </p>
          <p>
            If you want to make full use of combining a stopover with an open-jaw, you&#x2019;ll
            have to get creative with what days you fly in and out. You should also experiment with
            the order of cities you&#x2019;ll visit.
          </p>
          <p>
            Originally, I wanted to fly from Houston to Amsterdam, take the train to Berlin, and
            fly from Berlin to Ireland. But there were no bookings for that plan that allowed for
            me to spend only 60,000 miles. So I changed the order and flew to Ireland first, then
            to Berlin, and finally ended up in Amsterdam. Not only did I get the booking for 60,000
            miles, I also got a killer amount for airline fees.
          </p>
          <p>
            And just to conclude on a personal note, even with two weeks and two days for travel,
            three countries is a lot to see. By the end, I was exhausted. While combining a stopover
            with an open-jaw will make you feel like an amazing deal hunter, make sure you have
            the energy for the trip when it rolls around.
          </p>
        </section>
      </>
    );
  }
}

export default Step2P5WhatIDidContinued;
