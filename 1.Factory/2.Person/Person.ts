
abstract class PersonFactory {
    public static createPerson(type: string): IPerson {
        if (type === 'N') {
            return new NaturalPerson('Nata');
        } else if(type ==='L') {
            return new LegalPerson('Luis');
        }

    }
}

interface IPerson {
    name: string;
    identifier(): string;
}

class NaturalPerson implements IPerson {
    name: string;
    constructor(name?: string){
        this.name =  name;
    }

    identifier(): string {
        return `Identifier of NaturalPerson`;
    }
}

class LegalPerson implements IPerson {
    name: string;
    constructor(name?: string){
        this.name =  name;
    }

    identifier(): string {
        return `Identifier of LegalPerson`;
    }
}

class Main {
    public main(){
        const naturalPerson: IPerson = PersonFactory.createPerson("N");
        console.log('mainLog:', naturalPerson);
        console.log(naturalPerson.identifier());
        
        
    }
}

let runMain = new Main()
runMain.main()