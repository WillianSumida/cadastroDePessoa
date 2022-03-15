import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo : string = 'Cadastro de Pessoa';
  mensagem : string = 'Exercicio cadastro de pessoas na disciplina de TC2';
  desenvolvedor : string = 'Alex e Willian'
}
