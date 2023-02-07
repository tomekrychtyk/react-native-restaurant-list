import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer tWueZcfrLHEvsZgMy_d0xa8yMmpEHgoeTIaOqHdTSeGkvUeZRzFBbSTGnIMpsn2Eb9wRgWkxOLSGjDnzeFicT6HLWH3tHksJ9uL25w8i8ssoQc3-S0ltE0tzMYriY3Yx',
  },
});
