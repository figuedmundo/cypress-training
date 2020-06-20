const URL_PAGE = 'hola mundo'

class Casa {
  static get total() { return this._total; }
  static set total(v) { this._total = v; }

  static url() { return "hola mundo"}

  constructor(name, tennats){
    this._name = name;
    this._tennats = tennats;
    this._url = URL_PAGE
  }

  static visit(){
    console.log(URL_PAGE)
  }


  static barrio(){
    console.log(`Cochabamba`)
  }

  getTennats(){
    console.log(`Tennats that lives in ${this._name} are: ${this._tennats}`)
  }
}

const a = new Casa('bruno', 5);
const b = new Casa('Favio', 3);
const c = new Casa('Alex', 2);

Casa.visit() 
console.log(a._url)



// a.getTennats()
// b.getTennats()
// c.getTennats()
// a.totalTennats();

// a.barrio();

// Casa.barrio();