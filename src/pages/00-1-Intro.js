import React, { Component } from 'react';
import banner from '../images/banner.jpg';

class Intro extends Component {
  static title = 'Introduction';

  render() {
    return (
      <>
        <section>
          <img className="banner-image" src={banner} alt="Banner of Amsterdam, Ireland, and Berlin"/>
          <p>
            This is me. Last year, I took a trip across three countries: 7 days exploring Ireland, 4
            days hanging out in Berlin, and 5 days concluding my trip in Amsterdam. This kind of
            trip would normally cost several thousand dollars, even for a solo traveler. But I was
            able to save a good portion of those thousands of dollars by making large aspects of my
            trip free. And if not free, almost free. Now, I&apos;m passing on this knowledge to you.
          </p>
          <p>
            This guide is primarily aimed at those who have never taken advantage
            of credit card rewards to save money on travel. If you&apos;re well-versed on that
            subject already, then you can probably skip this guide. But if
            you&apos;re new to this area, you&apos;ll definitely want to keep reading.
          </p>
          <p>
            As with all things in the world of finance, credit card rewards can quickly become
            a complicated matter. There&apos;s a ton of information in this guide that is meant to
            give you a high-level summary of how I planned my trip, what cards I got, and
            how I went about getting rewards responsibly. If you find that you need to take a break
            from this guide, no worries. This site will automatically remember where you left off,
            and you can come back tomorrow with a fresh mind. It will even run offline!
          </p>
          <p>
            <strong>Note:</strong> Some links to credit cards in this guide are affiliate links. If
            you apply for any of these cards and are approved, I may receive compensation for it.
          </p>
        </section>
      </>
    );
  }
}

export default Intro;
