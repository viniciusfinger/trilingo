import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
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

  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada(); 
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Painel foi destruído.");    
  }

  public atualizaResposta(resposta: Event) : void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() : void {
    
    if (this.resposta == this.rodadaFrase.frasePt){
      this.rodada++;

      if (this.rodada === 4){
        this.encerrarJogo.emit('vitoria');
      }

      this.atualizaRodada();
      this.progresso += (100 / this.frases.length);
    } else {
      alert("A frase está errada.");
      this.tentativas--;

      if (this.tentativas === -1){
        this.encerrarJogo.emit('derrota');
      }
    } 
  }

  private atualizaRodada(){
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";  
  }
}
