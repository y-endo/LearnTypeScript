import Accordion from '@/classes/Accordion/index';
import SmoothScroll from '@/modules/SmoothScroll/index';

import getUserData from '@/functions/getUserData';

window.addEventListener('DOMContentLoaded', (): void => {
  Accordion.registerEventHandler();
  SmoothScroll.registerEventHandler();

  getUserData().then(data => {
    console.log(data);
  });
});
