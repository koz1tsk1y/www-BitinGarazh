import 'swiper/css';
import '../scss/style.scss'

import { customSelect } from './_custom-select.js'; 
import { tabsInit } from './_tabs.js'; 
import { headerInit } from './_header.js';
import { swiperInit } from './_swiper-init.js';
import { authPopupInit } from './_auth-popup.js';
import { productsInit } from './_products.js';

document.addEventListener('DOMContentLoaded', function() {
  customSelect();
  tabsInit();
  headerInit();
  swiperInit();
  authPopupInit();
  productsInit();
})