import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent {
  tarefas: any[] = [
    { descricao: 'Ler o livro acadêmico', concluida: false },
    { descricao: 'Hidratar o cabelo', concluida: true },
    { descricao: 'Levar os pets no pet shop', concluida: false },
    { descricao: 'Fazer compras', concluida: true },
    { descricao: 'Viajar para Miami', concluida: false }
  ];

  toggleConcluida(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }
}
