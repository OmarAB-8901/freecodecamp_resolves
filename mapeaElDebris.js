function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let orbitalResults = []

  arr.forEach( elem =>{
    let a = (elem.avgAlt + earthRadius)**3;
    // let a2 = Math.pow(earthRadius+elem.avgAlt, 3);

    const T = Math.round( (2*Math.PI) * Math.sqrt(a / GM) );
    // const T2 = Math.round( (2*Math.PI) * Math.sqrt(a2 / GM) );
    orbitalResults.push({name: elem.name, orbitalPeriod: T})
  });

  return orbitalResults;
}

let result = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
console.log(result);

result = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
console.log(result);