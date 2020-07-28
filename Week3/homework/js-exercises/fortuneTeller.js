'use strict';
let numChildren = [1, 2, 3, 4, 5];
let partnerNames = ['Sultan', 'Anne', 'Tom', 'Elizabeth', 'Adel'];
let locations = [
  'Netherlands',
  'United States',
  'France',
  'Germany',
  'Finland',
];
let jobs = [
  'programmer',
  'teacher',
  'doctor',
  'police officer',
  'public worker',
];

function tellFortune(numChildren, partnerNames, locations, jobs) {
  let fortuneNumChildren =
    numChildren[Math.floor(Math.random() * numChildren.length)];
  let fortunePartners =
    partnerNames[Math.floor(Math.random() * partnerNames.length)];
  let fortuneLocations =
    locations[Math.floor(Math.random() * locations.length)];
  let fortuneJobs = jobs[Math.floor(Math.random() * jobs.length)];
  return `You will be a ${fortuneJobs} in ${fortuneLocations}, married to ${fortunePartners} with ${fortuneNumChildren} kids`;
}

console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
