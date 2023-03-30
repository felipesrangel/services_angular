import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit{
  public nome: string = "Luiz";
  public idade: number = 24;
  
  public checkedDisabled: boolean = false;

  public imgSrc:string="https://s2.glbimg.com/SkyLTd6VJy8WiUMg5L6EeUwgyMw=/0x0:620x548/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/B/t/limPwzQmSeI4WJO7haZg/2012-08-15-mf1.jpg";
  public imgTitle:string="Property Binding";
  
  public position: {x: number, y: number} = {x:0, y: 0};

  constructor() {};

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }

  
}
