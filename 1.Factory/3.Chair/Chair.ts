class ChairFactory {
  static getChair(chair: string): IChair {
    if(chair === 'BigChair'){
        return new BigChair()
    }else if(chair === 'MediumChair'){
        return new MediumChair()
    }else {
        return new SmallChair()
    }
  }
}

type dimension = {
    height: number;
    width: number;
    depth: number;
  };

interface IChair {
  height: number;
  width: number;
  depth: number;
  getDimensions(): dimension;
}

class Chair implements IChair {
  height: number = 0;
  width: number = 0;
  depth: number = 0;
  getDimensions(): dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    };
  }
}

class SmallChair extends Chair {
    
    constructor(){
        super()
        this.height = 40
        this.width = 40
        this.depth = 40
    }
}

class MediumChair extends Chair {
    constructor(){
        super()
        this.height = 60
        this.width = 60
        this.depth = 60
    }
}

class BigChair extends Chair {
    constructor(){
        super()
        this.height = 80
        this.width = 80
        this.depth = 80
    }
}


const chair = ChairFactory.getChair("SmallChair");
console.log(chair.getDimensions());
