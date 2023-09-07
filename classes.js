class Triangle{
    constructor(_a,_b,_c){
        this.a= _a;
        this.b=_b;
        this.c=_c;
    }
    getParameter(){
        return this.a+this.b+this.c;
    }
}
let parameter= new Triangle(4,5,23);

console.log(`the parameter of triangle is ${parameter.getParameter()}`)