import { Component, OnInit } from '@angular/core';
import { vaga } from '../models/vagas.model';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.css']
})
export class PainelVagasComponent implements OnInit {

  public vaga: vaga = new vaga (0,"","","",0)
  public vagas: vaga[] = [];

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }
  

  cadastrar (){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      Vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao cadastrar")}
    );

    window.location.href = "/mural";
  }

  atualizar (id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      Vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao atualizar")}
    );

    window.location.href = "/mural";
  }

  excluir (id: number){
    this._vagasService.removerVaga(id).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao excluir")}
    );

    window.location.href = "/mural";
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



