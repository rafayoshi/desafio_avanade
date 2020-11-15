import { Component, Input, OnInit } from "@angular/core";
import { Pessoa } from "../card/card.component";

@Component({
  selector: "app-tabela-pessoas",
  templateUrl: "./tabela-pessoas.component.html",
  styleUrls: ["./tabela-pessoas.component.scss"],
})
export class TabelaPessoasComponent implements OnInit {
  pessoas: Pessoa[] = [];

  @Input()
  get pessoa(): Pessoa {
    return this._pessoa;
  }
  set pessoa(pessoa: Pessoa) {
    if (pessoa) {
      this._pessoa = pessoa;
      this.pessoas.push(this._pessoa);
      this.pessoas = [...this.pessoas];
    }
  }
  private _pessoa;
  constructor() {}

  ngOnInit() {}
}
