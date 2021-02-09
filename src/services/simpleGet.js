import axios from 'axios'

// Want to use async/await? Add the `async` keyword to your outer function/method.
export async function getHello() {
  try {
    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const response = await axios.get('localhost:4000/api/hello');
    console.log(response);
    return response.sample
  } catch (error) {
    console.error(error);
  }
}