import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  qtdeProdutos: number = 200;

  //produtos:{nome, preco}[];

  constructor() { }

  ngOnInit() {
    
    /*this.produtos = new Array<{ nome, preco }>();
    this.produtos.push({ nome:'New Pants', preco: 124.70});
    this.produtos.push({ nome:'Nouvelle Montre', preco: 230.60});
    this.produtos.push({ nome:'Modern Suit', preco: 270.60});
    this.produtos.push({ nome:'Winter Coats', preco: 210.50});
    this.produtos.push({ nome:'Appareil Photo', preco: 300.70}); */
  
  

  }
    getQtdeProdutos(): number{
      return this.qtdeProdutos;
   
    }
 
}
