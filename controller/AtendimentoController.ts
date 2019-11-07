import Atendimento from '../model/Atendimento';
import AtendimentoService from '../service/AtendimentoService';
import PessoaService from '../service/PessoaService';
import MensagemService from '../service/MensagemService';
import AtendimentoValidator from '../validation/AtendimentoValidator';

export default class AtendimentoController {
  constructor(
    private atendimentoService: AtendimentoService,
    private atendimentoValidator: AtendimentoValidator,
    private mensagemService: MensagemService
  ) {}

  // cadastra um atendimento
  cadastrar(atendimento: Atendimento) {
    if (!this.atendimentoValidator.validar(atendimento)) {
      this.mensagemService.erro(this.atendimentoValidator.getErro());
      return;
    }

    // grava o atendimento
    this.atendimentoService.gravarAtendimento(atendimento);

    // retorna com uma mensagem de sucesso
    this.mensagemService.sucesso('Atendimento cadastrado!');
  }
}
