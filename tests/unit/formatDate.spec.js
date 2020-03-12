import formatDate from '@/helper/formatDate'

describe('formatDate helper', () => {

    it('deve converter para BR ', () => {
        const action = formatDate('2019-02-03', 'BR')

        expect(action).toBe('03/02/2019')
    })

    it ('deve converter para US', () => {
        const action = formatDate('2019-02-03', 'US')

        expect(action).toBe('02/03/2019')
    })
})

// aaaa-mm-dd

// BR - dd/mm/aaaa
// US - mm/dd/aaaa