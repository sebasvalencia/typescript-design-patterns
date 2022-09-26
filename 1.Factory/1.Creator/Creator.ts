abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: the same creator's code hsa just worked with ${product.operation()}`;
  }
}

export interface Product {
  operation(): string;
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

class ConcreteProduct1 implements Product {
  operation(): string {
    return `{Result of the ConcreteProduct1}`;
  }
}

class ConcreteProduct2 implements Product {
  operation(): string {
    return `{Result of the ConcreteProduct2}`;
  }
}

class Client {
  public clientCode(creator: Creator) {
    console.log(`Client: I'm not aware of the creator's class, but it still works`);
    console.log(creator.someOperation());
  }
}

console.log(`App: Launched with the ConcreteCreator1`);
let client = new Client();
client.clientCode(new ConcreteCreator1());
console.log("");

console.log(`App: Launched with the ConcreteCreator2`);
client.clientCode(new ConcreteCreator2());
console.log();
