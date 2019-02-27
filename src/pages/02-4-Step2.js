import React, { Component } from 'react';
import Banner from '../components/banner';


class Step2P5 extends Component {
  render() {
    return (
      <>
        <section>
          <h1>Step 2.5 - Airline reward programs (continued)</h1>
        </section>
        <Banner icon="fas fa-plane-arrival" color="#4c6ef5" />
        <section>
          <p>
            So you&#x2019;ve got an airline now that seems to be the best deal in terms of miles.
            You should also have a sense of which credit card company to go with. But now
            we&#x2019;re going to talk about some of the perks you get out of being a member in an
            airline rewards program, the ones separate from the perks you get with your credit card.
          </p>
          <p>
            We&#x2019;re going to get familiar with two airline reward concepts: stopovers and
            open-jaws.
          </p>
          <p>
            Stopovers are when you fly from one major &#x201C;region&#x201D; in the world to a
            different &#x201C;region&#x201D;, and before flying back home to your home
            &#x201C;region&#x201D;, you take another flight within the &#x201C;region&#x201D; you
            left to.
          </p>
          <p>
            Scrathing your head? Don&#x2019;t worry. We&#x2019;ll break it down.
          </p>
        </section>
        <Banner icon={[ 'fas fa-globe-americas', 'fas fa-angle-double-right', 'fas fa-globe-africa' ]} color="#4c6ef5" />
        <section>
          <p>
            For the sake of simplicity, think of a &#x201C;region&#x201D; as a continent. In
            reality, it&#x2019;s more complicated than that, but right now we just want to
            understand the concepts.
          </p>
          <p>
            If I fly from Houston to Ireland, that means I&#x2019;m flying to Europe as my
            region. I could just take a flight back from Ireland to Houston and be
            done with it. But let&#x2019;s say I want to hangout in Germany for a bit. So instead
            of going back home, I fly from Ireland to Germany. Then, after having fun in Germany
            for a few days, I fly back to Houston from Germany.
          </p>
          <p>
            My flight from Ireland to Germany is my stopover. I flew from one region
            (North America), to a different region (Europe), and then before coming back to the US,
            I took another flight within the same region.
          </p>
          <p>
            What does all this terminology mean for us? Well, most airlines offer a
            &#x201C;free stopover&#x201D; as part of their rewards program if a booking is made
            entirely in miles. You can uncover this perk by searching for flights in the
            &#x201C;multi-city&#x201D; category.
          </p>
          <p>
            As of this writing, flying from Houston to Ireland takes 60,000 United Points round trip
            if booked on the right days (30,000 miles going over, 30,000 miles coming back).
            But I want to add Germany to my trip. So I fly from Ireland to Germany and then back to
            Houston. Does United charge me miles for this second flight within Europe? Short answer:
            no.
          </p>
          <p>
            When using the United search, it will cost me 30,000 miles to get from Houston to
            Ireland, 0 miles to get from Ireland to Germany, and 30,000 miles to get from Germany
            back to Houston. I&#x2019;ve used the same amount of miles to go from one spot in Europe
            to two.
          </p>
        </section>
        <Banner icon="far fa-surprise" color="#4c6ef5" />
        <section>
          <p>
            Now to get on to open-jaws. Let&#x2019;s say that I toss out Ireland and now decide
            to fly from Houston to Germany. A round trip flight would be
            the same 60,000 miles we&#x2019;re acquainted with. But let&#x2019;s say I want to take
            the train over to Amsterdam and hang out there for a few days. Then, when it&#x2019;s
            time to go back home, I fly back to Houston from <strong>Amsterdam</strong> (not
            Germany). Does United charge me for flying back home from a different country? No.
          </p>
          <p>
            An open-jaw is exactly the same as a stopover, only instead of involving an added
            flight within the same region, it just involves some other means of transportation
            to get to a second point within the same region. Could be the train, a car, a bus, a
            boat. Whatever.
          </p>
          <p>
            This makes sense since the airline isn&#x2019;t doing any extra work to take me to my
            second destination. I&#x2019;m using my own means. My imaginary trip will cost me
            30,000 miles to get from Houston to Germany, and 30,000 miles to get from Amsterdam
            back to Houston. I&#x2019;ve again used the same amount of miles to go from one spot in
            Europe to two.
          </p>
          <p>
            Remember! These perks only work if the two points you are traveling to are within the
            same region. So a flight from Houston to Ireland, then Ireland to Singapore, and then
            Singapore back to Houston would not qualify for a free stopover flight. Ireland and
            Singapore are not in the same region.
          </p>
          <p>
            Also, different airlines will have different policies for stopovers and open-jaws.
            What I&#x2019;ve detailed is strictly with United. Different airlines will have
            different perks and discounts, and all of them will define regions of the world
            differently. Do a Google search for your specific airline&#x2019;s policy and use their
            multi-city search. See if you can squeeze out another stopping point nearby your prime
            destination for either 0 miles or a discount.
          </p>
          <p>
            Now comes the real kicker. Can I combine stopovers and open-jaws? With United, yes.
          </p>
        </section>
      </>
    );
  }
}

export default Step2P5;
