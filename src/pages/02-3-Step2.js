import React, { Component } from 'react';
import Banner from '../components/banner';
import Link from '../components/link';

class Step2P5WhatIDid extends Component {
  static title = 'Step 2.5 - What I did';

  render() {
    return (
      <>
        <Banner headshot={true} color="#22b8cf" />
        <section>
          <p>
            Outside of the massive sign-up bonus with Chase, I also went with them because a blog
            post over at <Link
              href="https://thepointsguy.com/2014/05/what-will-60000-chase-ultimate-rewards-points-get-you/">The Points Guy</Link> said
            that 60,000 Chase points would equal 60,000 United Miles. 60,000 United Miles would
            be enough for a round-trip ticket from most major US airports to Europe for almost free.
            Some finagling with the departing and returning dates would be needed, but I was
            ready for that. All that&#x2019;s left to pay were
            some airline fees that were very reasonable. Knowing that in mind, and knowing that I
            wanted to go somewhere in Europe, picking the Chase rewards program was easy.
          </p>
          <p>
            But wait. My trip wasn&#x2019;t just to one destination in Europe. My whole trip was
            Ireland -&#x3E; Berlin -&#x3E; Amsterdam. That&#x2019;s not just a simple round-trip.
            That&#x2019;s multi-country. How does one not get just their prime destination, but
            also a chance at one or two extras?
          </p>
          <p>
            I&#x2019;m glad you asked.
          </p>
        </section>
      </>
    );
  }
}

export default Step2P5WhatIDid;
