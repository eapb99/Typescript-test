export class Accumulator {
    value: number;

    constructor(){
        this.value = 0
    }

    add(n: number){
        this.value+=n;
        return this.value;
    }
}