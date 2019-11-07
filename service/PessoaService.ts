import Pessoa from '../model/Pessoa';

export default class PessoaService {
  gravarPessoa(interessado: Pessoa) {
    throw new Error('Method not implemented.');
  }
  validarDadosPessoa(
    nomePessoa: string,
    nomeDaMae: string,
    dataDeNascimento: Date
  ): boolean {
    throw new Error('Method not implemented.');
  }
}
