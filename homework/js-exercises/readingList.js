'use strict';
let readingList = [
  {
    title: 'The Speed Reading',
    author: 'Tony Buzan',
    alreadyRead: true,
  },
  {
    title: 'The Culture Map',
    author: 'Erin Meyer',
    alreadyRead: false,
  },
  {
    title: 'The Night Curcus',
    author: 'Erin Morgenstern',
    alreadyRead: false,
  },
];
for (let i = 0; i < readingList.length; i++) {
  console.log(readingList[i]);
}

for (let i = 0; i < readingList.length; i++) {
  console.log(
    '"' +
      readingList[i].title +
      ' ' +
      'by ' +
      readingList[i].author +
      '"' +
      '.',
  );
}
for (let i = 0; i < readingList.length; i++) {
  if (readingList[i].alreadyRead === true) {
    console.log('Already read' + ' ' + '"' + readingList[i].title + '"');
  } else {
    console.log('Still need to read' + ' ' + '"' + readingList[i].title + '"');
  }
}
