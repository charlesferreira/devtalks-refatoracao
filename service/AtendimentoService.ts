import Atendimento from '../model/Atendimento';
import PessoaService from './PessoaService';

export default class AtendimentoService {
  constructor(private pessoaService: PessoaService) {}

  gravarAtendimento(atendimento: Atendimento) {
    this.pessoaService.gravarPessoa(atendimento.getInteressado());
    console.info('Gravando atendimento...', atendimento);
  }
}
