import Accordion from '@/classes/Accordion/index';
import SmoothScroll from '@/modules/SmoothScroll/index';

window.addEventListener('DOMContentLoaded', (): void => {
  Accordion.registerEventHandler();
  SmoothScroll.registerEventHandler();
});
