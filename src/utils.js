import dineImg from './assets/dine.png';
import movieImg from './assets/movie.png';
import cardgameImg from './assets/cardgame.png';
import wordgameImg from './assets/wordgame.png';
import snakeImg from './assets/snake.png';

const imageMap = {
  'dine.png': dineImg,
  'movie.png': movieImg,
  'cardgame.png': cardgameImg,
  'wordgame.png': wordgameImg,
  'snake.png': snakeImg,
};

export function getImageUrl(imageName) {
  return imageMap[imageName];
}