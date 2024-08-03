import { username, city, image } from '../components/user'; // Verify this path

test('username, city, and image are all exported', () => {
  expect(username).toEqual('Liza');
  expect(city).toEqual('New York');
  expect(image).toEqual('https://i.imgur.com/mV8PQxj.gif');
});
