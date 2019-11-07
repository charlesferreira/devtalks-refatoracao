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
  criar(atendimento: Atendimento) {
    // valida a pessoa: se informou interessado,
    // deve preencher todos os campos obrigatórios
    if (
      atendimento.interessado !== null &&
      (atendimento.interessado.nomeDaMae === null ||
        atendimento.interessado.nomeDaMae === null ||
        atendimento.interessado.dataDeNascimento === null)
    ) {
      this.mensagemService.erro('[pessoa] campos obrigatórios');
      return;
    } else {
      // se tem todos os dados obrigatórios, valida
      // se a pessoa ainda não existe no banco
      if (
        this.pessoaService.validarDadosPessoa(
          atendimento.interessado.nomePessoa,
          atendimento.interessado.nomeDaMae,
          atendimento.interessado.dataDeNascimento
        )
      ) {
        // valida o atendimento: se for anônimo e tiver mais de 90 dias
        // corridos desde a ocorrência, ou se não for anônimo e tiver
        // mais de 180 dias desde a ocorrência, exibe mensagem de erro
        const dateDiff = Date.now() - atendimento.dataOcorrencia.getTime();
        const numDiasOcorrencia = dateDiff / 1000 / 3600 / 24;
        if (
          (atendimento.interessado === null && numDiasOcorrencia <= 90) ||
          (atendimento.interessado !== null && numDiasOcorrencia <= 180)
        ) {
          this.mensagemService.erro('[pessoa] campos obrigatórios');
          return;
        } else {
          // grava a pessoa
          this.pessoaService.gravarPessoa(atendimento.interessado);

          // grava o atendimento
          this.atendimentoService.gravarAtendimento(atendimento);

          // retorna com uma mensagem de sucesso
          this.mensagemService.sucesso('Atendimento cadastrado!');
          return;
        }
      }
    }
  }
}