import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { vaga } from '../models/vagas.model';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {
  public vagas: vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas(){

    this._vagasService.getVagas()
      .subscribe(
        (        retornaVaga: any[]) => {
          this.vagas = retornaVaga.map(
            item => {
              return new vaga(
                item.id,
                item.nome,
                item.foto,
                item.descricao,
                item.salario
              );
            }
          )
        }
      )
  }

}
