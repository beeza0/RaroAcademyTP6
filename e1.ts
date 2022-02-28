// 1. Utilizando o enunciado e código do exercício "as rosas não falam", 
// presentes no bloco de exercícios anterior, você deve implementar 
// a mesma solução, porém utilizando promises e funções async/await (**os dois formatos**). 
// **Dica**: Os `setTimeout`'s dos métodos dos versos devem ser sustituídos por timeouts 
// promisificados. Uma possível implementação de timeout em modo promise é:

const timeout = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

const desafio1asRosasNaoFalam = () => {
    const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
    
    const queixoMeAsRosas = () => {
        timeout(geraIntervaloAleatório())
        .then(_ => {
          console.log('Queixo-me às rosas');
          masQueBobagem() 
        })
    };
  
    const masQueBobagem = () => {
      timeout(geraIntervaloAleatório())
        .then(_ => {
          console.log('Mas que bobagem')
          asRosasNaoFalam()
        })
    };
  
    const asRosasNaoFalam = () => {
      timeout(geraIntervaloAleatório())
        .then(_ => {
          console.log('As rosas não falam')
          simplesmenteAsRosasExalam()
      })
    };
  
    const simplesmenteAsRosasExalam = () => {
      timeout(geraIntervaloAleatório())
        .then(_ => {
          console.log('Simplesmente as rosas exalam')
          oPerfumeQueRoubamDeTi()
      })
    };
  
    const oPerfumeQueRoubamDeTi = () => {
      timeout(geraIntervaloAleatório())
      .then(_ => console.log('O perfume que roubam de ti, ai'))
    };
  
    queixoMeAsRosas() 
  }
  
  desafio1asRosasNaoFalam();