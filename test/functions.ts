import {reverse_a_number, palabraMasLarga,esString,getDays} from '../src/functions'
import {expect} from 'chai'

describe("Numbers-Function",()=>{

    it('Reverse a Number',()=>{
        let number = 1234531;
        expect(reverse_a_number(number)).to.equal(1354321)
    })

    it("Palabra mas larga",()=>{
        let cadena = "Web Development Tutorial"
        expect(palabraMasLarga(cadena)).to.equal("Development")
    })

    it("Es String",()=>{
        let cadena = "Web Development Tutorial"
        expect(esString(cadena)).to.equal(true)
    })

    it("Obtener Dias",()=>{
        let mes = 1
        let año = 2012
        expect(getDays(mes,año)).to.equal(31)
    })

})