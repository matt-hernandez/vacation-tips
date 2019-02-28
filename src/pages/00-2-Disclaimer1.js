import React, { Component } from 'react';
import Banner from '../components/banner';

class Disclaimer1 extends Component {
  static title = 'Disclaimer 1';

  render() {
    return (
      <>
        <Banner icon="fas fa-exclamation" color="#e64980" />
        <section>
          <p>
            I&#x2019;m not a financial adviser. If you follow my advice in this website,
            it&#x2019;s at your own risk.
          </p>
        </section>
      </>
    );
  }
}

export default Disclaimer1;
