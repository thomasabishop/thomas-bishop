import { wakaToken } from '../credentials';

export default async function getWakatimeData(endpoint) {
  const rootEndpoint = `https://cors-anywhere.herokuapp.com/https://wakatime.com/api/v1/users/current/${endpoint}`;
  try {
    let response = await fetch(rootEndpoint, {
      headers: {
        authorization: `Basic ${btoa(wakaToken)}`,
      },
      method: 'GET',
    });
    if (!response.ok) {
      console.log('there has been an error');
      throw new Error(`HTTP error. Status = ${response.status}`);
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}