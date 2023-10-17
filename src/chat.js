import axios from 'axios';

const options = {
  method: 'POST',
  url: 'https://chatgpt-api8.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '24c4977923mshfcd93877b151f62p1e0417jsn0cba3f292bba',
    'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
  },
  data: [
    {
      content: 'who won the super bowl 2019?',
      role: 'user'
    }
  ]
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}