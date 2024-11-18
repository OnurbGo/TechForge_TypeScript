abstract class Gerenciador_de_tarefas{
    protected tarefa: Set<string> = new Set();
    abstract aidicionar_tarefa(task: string): void;
    listar_tarefa(): string[] {return Array.from(this.tarefa);}
//--------------------------------------------------------------

class Projeto extends Gerenciador_de_tarefas {
    aidicionar_tarefa(task: string): void {
        if (this.tarefa.has(task)) {
            console.log(`Tarefa ${task} já foi adicionada ao projeto.`);
        } else {
            this.tarefa.add(task);
            console.log(`Tarefa ${task} adicionada ao projeto.`);
        }
    }
}

class Tarefas_diaria extends Gerenciador_de_tarefas {
    addTask(task: string): void {
        if (this.tarefa.has(task)) {
            console.log(`Tarefa diária ${task} já foi adicionada.`);
        } else {
            this.tarefa.add(task);
            console.log(`Tarefa diária ${task} adicionada.`);
        }
    }
}

//--------------------------------------------------------------

const projeto1 = new Projeto();
projeto1.aidicionar_tarefa("Destruir Tudo");
projeto1.aidicionar_tarefa("Arrumar Tudo");
projeto1.aidicionar_tarefa("Rezar pra funcionar");
console.log("Tarefas do projeto:", projeto1.listar_tarefa());


const tarefas_diaria1 = new Tarefas_diaria();
tarefas_diaria1.addTask("Fazer exercícios");
tarefas_diaria1.addTask("Ler um livro");
tarefas_diaria1.addTask("Fazer exercícios");
console.log("Tarefas diárias:", tarefas_diaria1.listar_tarefa());


}