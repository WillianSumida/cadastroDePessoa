import { Component, OnInit } from '@angular/core';
import { ListaPessoasComponent } from '../lista-pessoas/lista-pessoas.component';
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
  
  listaPessoa:ListaPessoasComponent = new ListaPessoasComponent
  onSubmit(){
    const pessoa: Pessoa = {
      nome:this.nome,
      dataNascimento: new Date(this.dataNascimento),
      imagem: this.imagem
    }

    //VERIFICA SE O NOME JA EXISTE NA LISTA
    if(!this.listaPessoa.getPessoa(pessoa)){
      alert("Adicionado")
      this.listaPessoa.adicionarPessoa(pessoa)
    }else{
      alert("Esse nome ja foi adicionado")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
