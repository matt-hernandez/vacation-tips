import Intro from '../pages/00-1-Intro';
import Disclaimer1 from '../pages/00-2-Disclaimer1';
import Disclaimer2 from '../pages/00-3-Disclaimer2';
import Disclaimer3 from '../pages/00-4-Disclaimer3';

const journey = [
  {
    url: '/',
    component: Intro
  },
  {
    url: '/disclaimer1',
    component: Disclaimer1
  },
  {
    url: '/disclaimer2',
    component: Disclaimer2
  },
  {
    url: '/disclaimer3',
    component: Disclaimer3
  }
];

export default journey;
