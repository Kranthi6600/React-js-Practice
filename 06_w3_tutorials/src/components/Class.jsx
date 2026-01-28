import React from 'react'

export default function Class() {

    class Car {
    constructor(name) {
      this.name = name
    }

    present(){
      return 'I have a ' + this.name
    }
  }

  class Model extends Car {
    constructor(name, eng) {
      super(name);
      this.engine = eng;
    }

    show() {
      return this.present() + ', it has a ' + this.engine + ' Engine'
    }
  }

  class Company extends Model{
    constructor(name, eng, company){
      super(eng, name);
      this.companyName = company;
    }

    show2(){
      return this.show() + ' and this is from ' + this.companyName + ' (ye mathpado BSDK)';
    }
  }

  const myCar = new Company('Supra', 'V8', 'Toyota')

  return (
    <div>
        {myCar.show2()}
    </div>
  )
}
