import Atendimento from '../model/Atendimento';
import AtendimentoService from '../service/AtendimentoService';
import PessoaService from '../service/PessoaService';
import MensagemService from '../service/MensagemService';

export default class AtendimentoController {
  constructor(
    private pessoaService: PessoaService,
    private atendimentoService: AtendimentoService,
    private mensagemService: MensagemService
  ) {}

  // cadastra um atendimento
  cadastrar(atendimento: Atendimento) {
    // valida a pessoa: se informou interessado,
    // deve preencher todos os campos obrigatórios
    if (!atendimento.isAnonimo && atendimento.getInteressado().validar()) {
      this.mensagemService.erro('[pessoa] campos obrigatórios');
      return;
    }

    // se tem todos os dados obrigatórios, valida
    // se a pessoa ainda não existe no banco
    if (this.pessoaService.pessoaJaCadastrada(atendimento.getInteressado())) {
      this.mensagemService.erro('[pessoa] pessoa já cadastrada');
      return;
    }

    // valida o atendimento: se for anônimo e tiver mais de 90 dias
    // corridos desde a ocorrência, ou se não for anônimo e tiver
    // mais de 180 dias desde a ocorrência, exibe mensagem de erro
    if (atendimento.prazoExpirado()) {
      this.mensagemService.erro('[pessoa] prazo expirado');
      return;
    }

    // grava a pessoa
    this.pessoaService.gravarPessoa(atendimento.getInteressado());

    // grava o atendimento
    this.atendimentoService.gravarAtendimento(atendimento);

    // retorna com uma mensagem de sucesso
    this.mensagemService.sucesso('Atendimento cadastrado!');
  }
}
