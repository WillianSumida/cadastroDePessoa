import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})

export class FormularioComponent implements OnInit {

  nome:string = ""
  dataNascimento:string = ""
  imagem:string = ""
  listaPessoa : Pessoa[] = []

  onSubmit() : void{
    const pessoa: Pessoa = {
      nome:this.nome,
      dataNascimento: new Date(this.dataNascimento),
      imagem: this.imagem
    }

    //VERIFICA SE O NOME JA EXISTE NA LISTA
    if(!this.getPessoa(pessoa)){
      this.adicionarPessoa(pessoa);
    }else{
      alert("Esse nome ja foi adicionado")
    }
  }

  adicionarPessoa(pessoa:Pessoa) : void{
      this.listaPessoa.push(pessoa)
      alert("Adicionado")
  }

  getPessoa(getPessoa:Pessoa) : boolean{
    const index = this.listaPessoa.findIndex(pessoa => pessoa.nome.toUpperCase() === getPessoa.nome.toUpperCase())
    if (index > -1) {
      return true;
    } else{
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
