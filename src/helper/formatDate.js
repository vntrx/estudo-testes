export default (date, format) => {
    const [ano, mes, dia] = date.split('-')

    if(format == 'BR') {
        return `${dia}/${mes}/${ano}`
    } else {
        return `${mes}/${dia}/${ano}`
    }
   }