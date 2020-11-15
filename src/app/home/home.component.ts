import { Component, OnInit } from "@angular/core";
import { Pessoa } from "../card/card.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  pessoa: Pessoa = null;
  constructor() {}

  ngOnInit() {}

  adicionar(event) {
    this.pessoa = event;
  }
}
