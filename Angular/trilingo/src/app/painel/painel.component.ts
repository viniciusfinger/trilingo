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
      alert("Parabéns! você acertou!");

      this.rodada++;
      this.atualizaRodada();
      this.progresso += (100 / this.frases.length);
    } else {
      alert("A frase está errada.");
    } 
  }

  private atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";  
  }
}
