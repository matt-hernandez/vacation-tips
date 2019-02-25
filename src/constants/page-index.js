import journey from '../constants/journey';

const localStoragePageIndex = localStorage.getItem('ccTravelPageIndex') || 0;
let pageIndex = localStoragePageIndex ? Number(localStoragePageIndex) : 0;
const lastPageIndex = journey.length - 1;

export function getPageIndex() {
  return pageIndex;
}

export function decreasePageIndex() {
  if (pageIndex > 0) {
    pageIndex--;
  }
}

export function increasePageIndex() {
  if (pageIndex < lastPageIndex) {
    pageIndex++;
  }
}

export function isAtBeginning() {
  return pageIndex === 0;
}

export function isAtEnd() {
  return pageIndex === lastPageIndex;
}
