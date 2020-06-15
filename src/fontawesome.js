// import the library
import React from React;
import '@fortawesome/free-solid-svg-icons';
import('@fortawesome/fontawesome-svg-core').FontawesomeObject;
import { library } from '@fortawesome/fontawesome-svg-core';

// import your icons
import { faHome } from '@fortawesome/free-solid-svg-icons';

import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter
  } from '@fortawesome/free-brands-svg-icons';

library.add(
  faHome,
  faMoneyBill,
  faCode,
  faHighlighter,
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter
  // more icons go here
);

export default fontawesome;