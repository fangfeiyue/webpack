import axios from 'axios';

axios.get('http://www.dell-lee.com/react/api/header.json').then(res => {
  console.log(res)
});