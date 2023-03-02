export default async function requestApi() {
  const url = 'https://swapi.dev/api/planets/';
  const result = await fetch(url);
  return result.json();
}
