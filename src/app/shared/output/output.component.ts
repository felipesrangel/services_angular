import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit{

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{nome: string, idade: number}> = [
    {nome: "Luiz Rangel", idade: 29},
    {nome: "Mateus", idade: 31},
    {nome: "Joao", idade: 12}
  ]
  constructor(){}

  ngOnInit(): void {
      
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }
}
