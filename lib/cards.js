// import matter from 'gray-matter';
import data from '/data/landscapes.json';



export function getCardData() {
  console.log(data.album, "from lib/cards")
  return data.album.map(a => a.description);
}