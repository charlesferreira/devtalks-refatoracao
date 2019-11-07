import Pessoa from '../model/Pessoa';

export default class PessoaService {
  gravarPessoa(pessoa: Pessoa) {
    console.info('Gravando pessoa...', pessoa);
  }

  pessoaJaCadastrada(pessoa: Pessoa): boolean {
    throw new Error('Method not implemented.');
  }
}
