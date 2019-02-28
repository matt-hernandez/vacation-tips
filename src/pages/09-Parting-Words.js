import React, { Component } from 'react';
import Banner from '../components/banner';
import Link from '../components/link';

class PartingWords extends Component {
  static title = 'Resources';

  render() {
    return (
      <>
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
          <div className="spacer" />
          <p>
            My current travel cards
          </p>
          <ul>
            <li>
              <Link href="https://www.referyourchasecard.com/6/Q69RWB34CF">Chase Sapphire Preferred</Link>
            </li>
            <li>
              <Link href="https://www.referyourchasecard.com/217/JOXQOLVIGS">Chase United Explorer</Link>
            </li>
            <li>
              <Link href="https://www.referyourchasecard.com/255/DA8RRN0T81">Chase Southwest Priority</Link> - For domestic flights
            </li>
          </ul>
          <div className="spacer" />
          <p>
            American Express Rewards cards
          </p>
          <ul>
            <li>
              <Link href="https://card.americanexpress.com/d/platinum-charge-card/gold-card/?">Amex Gold Card</Link>
            </li>
            <li>
              <Link href="https://card.americanexpress.com/d/platinum-charge-card/">Amex Platinum Card</Link>
            </li>
          </ul>
          <div className="spacer" />
          <p>
            Marriott Hotel Cards
          </p>
          <ul>
            <li>
              <Link href="https://creditcards.chase.com/marriott/apply">Chase Marriott Bonvoy</Link>
            </li>
            <li>
              <Link href="https://card.americanexpress.com/d/bonvoy-brilliant-credit-card/?">Amex Marriott Bonvoy</Link>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default PartingWords;
