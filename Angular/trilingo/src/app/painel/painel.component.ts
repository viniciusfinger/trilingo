import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases : Array<Frase> = FRASES;
  public instrucao : string = "Traduza a frase:";
  public resposta : string = "";

  public rodada : number = 0;
  public progresso : number = 0;
  public rodadaFrase : Frase; 
  public tentativas : number = 3;

  constructor() {
    this.atualizaRodada(); 
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event) : void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() : void {
    
    if (this.resposta == this.rodadaFrase.frasePt){
      this.rodada++;

      if (this.rodada === 4){
        alert("Parabéns! você concluiu com sucesso.");
      }

      this.atualizaRodada();
      this.progresso += (100 / this.frases.length);
    } else {
      alert("A frase está errada.");
      this.tentativas--;

      if (this.tentativas === -1){
        alert("Você perdeu! tente novamente.");
      }
    } 
  }

  private atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";  
  }
}
