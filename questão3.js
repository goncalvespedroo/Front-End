function q3TratarDatas(data) {

    const months = {
        'jan' : '01', 'fev' : '02','mar' : '03', 'abr' : '04','mai' : '05', 'jun' : '06','jul' : '07', 'ago' : '08', 'set' : '09', 'out' : '10','nov' : '11', 'dez' : '12', 'janeiro' : '01', 'fevereiro' : '02','março' : '03', 'abril' : '04', 'maio' : '05', 'junho' : '06','julho' : '07', 'agosto' : '08', 'setembro' : '09', 'outubro' : '10', 'novembro' : '11','dezembro' : '12'
    }

    const form1 = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const form2 = /^(\d{2}) (\w{3}) (\d{4})$/;
    const form3 = /^(\d{2}) de (\w+) de (\d{4})$/;

    let match;

    if ((match = data.match(form1))) {
        return `${match[3]}-${match[2]}-${match[1]}`;
    } else if ((match = data.match(form2))) {
        const month = months[match[2].toLowerCase()];
        return `${match[3]}-${month}-${match[1]}`;
    } else if ((match = data.match(form3))) {
      const month = months[match[2].toLowerCase()];
      return `${match[3]}-${month}-${match[1]}`;
    } else {
      return 'Formato de data inválido';
    }

    return data;
  }
  
  const datasParaTratar = [
    '30/11/2022',
    '01 dez 2022', 
    '25/12/2022', 
    '31 de dezembro de 2022'
  ];
  
  datasParaTratar.forEach(data => {
    console.log(q3TratarDatas(data));
  });