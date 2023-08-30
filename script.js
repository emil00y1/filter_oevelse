const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");
const header =
  "  <li><strong>Type</strong></li><li><strong>Fuel</strong></li><li><strong>Passengers</strong></li><li><strong>Stops</strong></li><li><strong>OwnedBy</strong></li><li><strong>Electric</strong></li><li><strong>Tandem</strong></li>";

function showTheseVehicles(arr) {
  ulPointer.innerHTML = header;
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li class="content">${each.type}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.fuel}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.passengers}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.stops}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li class="content">${each.isTandem}</li>`;
  });
}
function transport(mode) {
  if (mode.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

function electricowned(mode) {
  if (mode.isElectric === true && mode.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

function transport4(mode) {
  if (mode.fuel === "Rugbrød" && mode.passengers > 0) {
    return true;
  } else {
    return false;
  }
}

function twoseatfunc(mode) {
  if (mode.passengers > 2) {
    return true;
  } else {
    return false;
  }
}
function showAll() {
  return true;
}

const electric = vehicles.filter(transport);

const twoseat = vehicles.filter((mode) => mode.passengers > 2);

const electricbyjonas = vehicles.filter(electricowned);

const bigbread = vehicles.filter(transport4);

/* console.log(bigbread);
 */
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", btnClicked);
});

function btnClicked(evt) {
  let finalFilter;

  ulPointer.replaceChildren();

  if (evt.target.dataset.filter === "all_eletric") {
    finalFilter = transport;
  } else if (evt.target.dataset.filter === "twoseat") {
    finalFilter = twoseatfunc;
  } else if (evt.target.dataset.filter === "electrbyjonas") {
    finalFilter = electricowned;
  } else if (evt.target.dataset.filter === "bread1") {
    finalFilter = transport4;
  } else {
    finalFilter = showAll;
  }

  showTheseVehicles(vehicles.filter(finalFilter));

  /*   evt.target.removeEventListener("click", btnClicked);
   */
}
