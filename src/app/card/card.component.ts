import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  nome: any;
  data: any;
  @Output() adicionarPessoa = new EventEmitter<Pessoa>();
  constructor() {}

  ngOnInit() {}

  adicionar() {
    if (this.data && this.nome) {
      this.adicionarPessoa.emit(new Pessoa(this.nome, this.data));
    }
  }
}

export class Pessoa {
  nome: string;
  dataNasc: Date;
  constructor(nome: string, dataNasc: Date) {
    this.nome = nome;
    this.dataNasc = dataNasc;
  }
}
