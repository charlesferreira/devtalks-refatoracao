import Atendimento from '../model/Atendimento';
import AtendimentoService from '../service/AtendimentoService';
import MensagemService from '../service/MensagemService';
import AtendimentoValidator from '../validation/AtendimentoValidator';

export default class AtendimentoController {
  constructor(
    private atendimentoService: AtendimentoService,
    private atendimentoValidator: AtendimentoValidator,
    private mensagemService: MensagemService
  ) {}

  cadastrar(atendimento: Atendimento) {
    if (!this.atendimentoValidator.validar(atendimento)) {
      this.mensagemService.erro(this.atendimentoValidator.getErro());
      return;
    }

    this.atendimentoService.gravarAtendimento(atendimento);
    this.mensagemService.sucesso('Atendimento cadastrado!');
  }
}
