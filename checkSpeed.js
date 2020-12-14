checkSpeed(130);

function checkSpeed(speed) {
  const speedLimit = 70;
  const point = 5;
  if (speed <= speedLimit) console.log("OK");
  else {
    let points = Math.floor((speed - speedLimit) / point);
    if (point >= 12) console.log("license suspended");
    else console.log("points", points);
  }
}
