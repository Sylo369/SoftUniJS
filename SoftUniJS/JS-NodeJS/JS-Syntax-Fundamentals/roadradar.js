function radar(speed, areaType){
const motorwayLimit = 130;
const interstateLimit = 90;
const cityLimit = 50;
const residentialLimit = 20;

let status;
let overTheLimit = false;
let speedLimit;

switch (areaType) {
  case "residential": {
    speedLimit = residentialLimit;
    if (speed <= residentialLimit) {
      overTheLimit = false;
    } else if (speed <= residentialLimit + 20) {
      status = "speeding";
      overTheLimit = true;
    } else if (speed <= residentialLimit + 40) {
      status = "excessive speeding";
      overTheLimit = true;
    } else {
      status = "reckless driving";
      overTheLimit = true;
    }
    break;
  }

  case "city": {
    speedLimit = cityLimit;
    if (speed <= cityLimit) {
      overTheLimit = false;
    } else if (speed <= cityLimit + 20) {
      status = "speeding";
      overTheLimit = true;
    } else if (speed <= cityLimit + 40) {
      status = "excessive speeding";
      overTheLimit = true;
    } else {
      status = "reckless driving";
      overTheLimit = true;
    }
    break;
  }

  case "interstate": {
    speedLimit = interstateLimit;
    if (speed <= interstateLimit) {
      overTheLimit = false;
    } else if (speed <= interstateLimit + 20) {
      status = "speeding;";
      overTheLimit = true;
    } else if (speed <= interstateLimit + 40) {
      status = "excessive speeding";
      overTheLimit = true;
    } else {
      status = "reckless driving";
      overTheLimit = true;
    }
    break;
  }

  case "motorway": {
    speedLimit = motorwayLimit;
    if (speed <= motorwayLimit) {
      overTheLimit = false;
    } else if (speed <= motorwayLimit + 20) {
      status = "speeding";
      overTheLimit = true;
    } else if (speed <= motorwayLimit + 40) {
      status = "excessive speeding";
      overTheLimit = true;
    } else {
      status = "reckless driving";
      overTheLimit = true;
    }
    break;
  }
}

if(overTheLimit == false)
{
console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
}
else
{
console.log(`The speed is ${speed - speedLimit} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}
}

radar(200, 'motorway');