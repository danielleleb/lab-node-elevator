class Elevator {
  constructor () {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.passengers = [];
    this.waitingList = [];
    this.direction = 'up';
  }

  start () {
    this.interval = setInterval(function () {
      this.update();
    }, 1000
    );
  };
  stop () {
    setTimeout(function () {
      clearInterval(this.interval);
    }, 1);
  }
  update (log) {
    this.log();
  }
  _passengersEnter (person) {
    this.passengers.push(person);
    this.waitingList.pop(person);
    this.requests.push(person.destinationFloor);
    console.log(person.name + ' has just entered the elevator.');
  }
  _passengersLeave () {
    this.passengers.pop(this.person);
    console.log(this.person.name + ' has just left the elevator.');
  }
  floorUp () {
    this.floor++;
  }
  floorDown () {
    this.floor--;
  }
  call (Person) {
    const person = new Person(this.name, this.originFloor, this.destinationFloor);
    this.requests.push(person.originFloor);
  }
  log () {
    console.log('Direction: ' + this.direction + ' | Floor :' + this.floor);
  }
}

module.exports = Elevator;

let elevator = new Elevator();
elevator.floorUp();
elevator.update(elevator.log);
