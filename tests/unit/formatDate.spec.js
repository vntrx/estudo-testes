import formatDate from '@/helper/formatDate'

describe('formatDate helper', () => {

    it('Should covert ISO date to BR date', () => {
        
        const action = formatDate('2019-02-03') // ddmmyyyy
        const action2 = formatDate('2020-03-05') // ddmmyyyy

        expect(action).toBe('03022019')
        expect(action2).toBe('05032020')
    })
})