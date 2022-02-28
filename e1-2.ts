// 1. Utilizando o enunciado e código do exercício "as rosas não falam", 
// presentes no bloco de exercícios anterior, você deve implementar 
// a mesma solução, porém utilizando promises e funções async/await (**os dois formatos**). 
// **Dica**: Os `setTimeout`'s dos métodos dos versos devem ser sustituídos por timeouts 
// promisificados. Uma possível implementação de timeout em modo promise é:

const timeout = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const desafio1asRosasNaoFalam = async () => {
      const geraIntervaloAleatório = (): number => Math.floor(Math.random() * 3 * 1000);
      
      const queixoMeAsRosas  = async () => {
        await timeout(geraIntervaloAleatório())
        console.log('Queixo-me às rosas')
      };
    
      const masQueBobagem = async () => {
        await timeout(geraIntervaloAleatório())
        console.log('Mas que bobagem')
      };
    
      const asRosasNaoFalam = async () => {
        await timeout(geraIntervaloAleatório())
        console.log('As rosas não falam')
      };
    
      const simplesmenteAsRosasExalam = async () => {
        await timeout(geraIntervaloAleatório())
        console.log('Simplesmente as rosas exalam')
      };
    
      const oPerfumeQueRoubamDeTi = async () => {
        await timeout(geraIntervaloAleatório())
        console.log('O perfume que roubam de ti, ai')
      };
    
      await queixoMeAsRosas()
      await masQueBobagem()
      await asRosasNaoFalam()
      await simplesmenteAsRosasExalam()
      await oPerfumeQueRoubamDeTi()
    }
    
    desafio1asRosasNaoFalam();