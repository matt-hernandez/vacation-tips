import React, { Component } from 'react';
import Banner from '../components/banner';
import Link from '../components/link';

class Step4 extends Component {
  static title = 'Step 4 - Get that sign-up bonus, responsibly';

  render() {
    return (
      <>
        <Banner icon="fas fa-file-invoice-dollar" color="#ff922b" />
        <section>
          <p>
            Getting a credit card sign-up bonus is the quickest way to reach your points goal.
            Depending on the deal, it might be the only thing you need.
          </p>
          <p>
            But credit card companies offer sign-up bonuses for one primary reason: to get you in
            debt. Encouraging large spending also encourages the odds that someone will carry a
            balance on the card and thereby get charged interest. You don&#x2019;t want that!
          </p>
          <p>
            As soon as you get your card, put that thing on auto-pay and set it to pay off the
            balance in full every month. If you followed my requirements at the start of this guide,
            you should have enough money in the bank to pay off a full balance every month. And if
            you have a good credit score already, you&#x2019;re probably doing this anyway.
          </p>
          <p>
            But what about that spending goal itself? If you applied for the <Link
              href="https://www.referyourchasecard.com/6/Q69RWB34CF">Chase Sapphire Preferred</Link> or <Link
              href="https://creditcards.chase.com/a1/sapphire/DualA">Reserve</Link>, you&#x2019;ll need to spend $4,000 in three months starting from
            the day you get approved. Not the day your card arrives in the mail. The day you get
            approved.
          </p>
          <p>
            The easiest way to do this is to put every single possible living expense you can on
            your card: your groceries, your gas, your bills, your monthly subscriptions, and all the
            bars and restaurants you go to.
          </p>
          <p>
            Depending on your lifestyle, you may meet that spending goal pretty easily. But
            if your living expenses don&#x2019;t seem high enough, there are some
            tricks you can pull, albeit with some risk involved.
          </p>
          <p>
            Can you pay off your rent with your credit card? You may incur a small percentage fee,
            but in relation to your sign-up bonus, is it worth it? Can you cover a restaurant
            tab for you and a few friends and have them pay you back via Venmo or PayPal? Got a big
            purchase you know you need to make in the future? Maybe you can wait until that time is
            closer, apply for the card, and put the purchase on the card?
          </p>
          <p>
            Know your limits and don&#x2019;t do anything that makes you feel uneasy (or shady).
            The idea to meeting your sign-up bonus goal responsibly is to spend like you would
            normally, only now you&#x2019;re putting every possible expense on one card. And
            remember, you usually have three months to meet the spending limit. You don&#x2019;t
            have to do it all at once.
          </p>
          <p>
            Lastly, and I cannot stress this enough, <strong>DO NOT TRY TO GAME THE SYSTEM</strong>.
          </p>
          <p>
            If there&#x2019;s anyone who tries to tell you about a trick you can use to meet your
            sign-up bonus without losing any actual money, they&#x2019;re probably telling you
            about a trick that credit card companies have already caught onto. Think you can send
            $4,000 to your friend on Venmo by charging your credit card, only to have them transfer
            it back a few days later so you can put it into your bank account? Think again!
          </p>
          <p>
            Credit companies know these tricks. Don&#x2019;t try to do a Venmo circle, or buy $4,000
            worth of pre-paid gift cards, or buy gold coins that you can then take to the bank and
            put back into your account. You will get banned and you will get your credit card points
            revoked.
          </p>
          <p>
            Spend money naturally, or as close to it as possible. For more help, <Link
              href="https://thepointsguy.com/guide/ways-to-meet-minimum-spending-requirement/">read this</Link>.
          </p>
        </section>
      </>
    );
  }
}

export default Step4;
