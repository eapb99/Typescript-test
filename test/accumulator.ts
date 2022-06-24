import {Accumulator} from '../src/accumulator'
import {expect} from 'chai'

describe('Calculator', () => {
    it("Inicializando acumulador con valor 0",() => {
        let acumulador = new Accumulator()
        expect(acumulador.value).to.equal(0)
    })

    it("Retorna el valor de x cuando se agrega el valor x inmediatamente despues de la creacion", () => {
        let acumulador = new Accumulator()
        expect(acumulador.add(10)).to.equal(10)
    })

    it("Almacena directamente el valor del metodo add en la variable value",() => {
        let acumulador = new Accumulator()
        acumulador.add(15)
        expect(acumulador.value).to.equal(15)
    })

    it("Permite multiples adiciones",()=> {
        let acumulador = new Accumulator()
        acumulador.add(15)
        acumulador.add(151)
        expect(acumulador.add(10)).to.equal(176)
    })

    it("Almacena el valor luego de multiples Adiciones", () => {
        let acumulador = new Accumulator()
        acumulador.add(15)
        acumulador.add(151)
        expect(acumulador.value).to.equal(166)
    })
})


