import { Component, Input, OnInit } from '@angular/core';
import { Client } from './client/client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {
  
  @Input() name: string;
  @Input() lastName: string;
  @Input() age : number;

  clients: Client[];

  constructor() {
    this.clients = [
      {id: 1, name: "Vinicius", age: 20},
      {id: 1, name: "Caue", age: 16},
      {id: 1, name: "Vera", age: 51},
      {id: 1, name: "Jairo", age: 63}
    ]
  }

  ngOnInit() {
  }

}
