import React, { Component } from 'react';
import Banner from '../components/banner';
import Link from '../components/link';

class PartingWords extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Resources</h1>
        </section>
        <Banner icon="fas fa-list-ul" color="#2086f3" />
        <section>
          <p>
            Everything I learned, I learned from other people and other resources online. Here are
            the places I recommend for more research into the world of reward travel.
          </p>
          <ul>
            <li>
              <Link href="https://www.creditkarma.com/">Credit Karma</Link> - For assessing your
              credit score and finding ways to improve it. Also to see your estimated chances at
              applying for some cards.
            </li>
            <li>
              <Link href="https://thepointsguy.com/">The Points Guy</Link> - For reading up on how
              to maximize your credit card and hotel points.
            </li>
            <li>
              <Link href="http://travelisfree.com/">Travel is Free</Link> - For reading up on how
              to maximize your points and general travel tips.
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default PartingWords;
