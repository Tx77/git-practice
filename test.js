class HelloWorld {
  constructor(name) {
    super(name);
  }
  getName(name) {
	  console.log(name);
  }
}

let hello = new HelloWorld('haha');
console.log(hello.name);

hello.getName('xixi');