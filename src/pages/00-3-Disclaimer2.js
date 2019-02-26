import React, { Component } from 'react';
import Banner from '../components/banner';

class Disclaimer2 extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Disclaimer 2</h1>
        </section>
        <Banner color="#ff922b" icon="fa fa-comment-dollar" />
        <section>
          <p>
            With my previous disclaimer having been said, I&#x2019;m just going to say that there
            are three conditions you need to fulfill before you do anything in this guide. If you
            don&#x2019;t meet these three conditions, come back to this website for later, or at
            least wait to follow any of its advice until later.
          </p>
          <p>
            Condition 1 - You must have at least one month&#x2019;s worth of income saved up in an
            account. Mind you, I said income, not living expenses. When the end of the month rolls
            around and all your living expenses have left your account, you should have one
            month&#x2019;s worth of pay or more left over. If that&#x2019;s not the case, start
            saving.
          </p>
          <p>
            Condition 2 - You must have no credit card debt. We&#x2019;re going to be playing with
            applying for credit cards in this guide. But if you have any existing credit card debt
            right now, pay it off first before proceeding.
          </p>
          <p>
            Condition 3 - You must have an established credit score in decent standing. Ideally,
            your score is 700 or better. You might get lucky with a lower score, but you could
            potentially make your score worse if you apply for a card and get rejected.
          </p>
        </section>
      </>
    );
  }
}

export default Disclaimer2;
