  import Papa from 'papaparse';

  export const formatoDeMoeda = (valor) => {
    return parseFloat(valor).toLocaleString('pt-br', {minimumFractionDigits: 2});
  }

  export const tabelaConsorcios = (csv,valor) =>{
        
    const valores=Papa.parse(csv)
    const newValues=valores.data.map(item=>{
      return [
        parseFloat(item[0].replace(',','.')),
        parseInt(item[1]),
        parseFloat(item[5].replace(',','.')),
        item[6]===""?0:parseFloat(item[6].replace(',','.')),
      ]
    })
    const valoresFiltrados=newValues.filter((item, index)=>{
      console.log('valor do item '+index,item[0]);
      console.log('são iguais? '+index,item[0]===parseFloat(valor));
  
      return item[0]===parseFloat(valor)
    });

    return valoresFiltrados;
  }