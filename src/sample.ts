export class Sample {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
      greeting(): string {
      return "Hello " + this.name;
    }
}

const sample = new Sample("John Doe");
console.log(sample.greeting());