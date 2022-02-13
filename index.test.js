const calculo = require('./index.js')
const array = require('./array.js')

test('soma 30 e 20 para dar 50', () => {
   expect(calculo.soma(30, 20)).toEqual(50)
})

test('divide 15 por 3 para dar 5', () => {
    expect(calculo.divisao(15, 3)).toBeCloseTo(5)
 })

 test('retorna apenas os pares no array', () => {
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let array2 = [2, 4, 6, 8, 10]
    expect(array.retornePares(array1)).toEqual(array2)
 })
 test('Adicionar item 4', () => {
    let arraycont = ['item1', 'item2', 'item3']
    expect(array.addItem4(arraycont)).toContain('item4')
  })

  test('3 mais 3', () => {
    let valor = 3 + 3
    expect(valor).toBeGreaterThan(5) 
    expect(valor).toBeGreaterThanOrEqual(6) 
    expect(valor).toBeLessThan(8) 
    expect(valor).toBeLessThanOrEqual(7) 
    expect(valor).not.toEqual(5) 
  })