export default class MensagemService {
  sucesso(mensagem: string) {
    console.info(mensagem);
  }

  erro(mensagem: string) {
    console.error(mensagem);
  }
}
