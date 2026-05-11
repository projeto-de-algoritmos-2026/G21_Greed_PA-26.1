# Cloud Resource Optimizer (Interval Partitioning)

**Grupo:** G21_Greed_PA-26.1
**Conteúdo da Disciplina:** Algoritmos Ambiciosos (Greed)

## Alunos
|Matrícula | Aluno |
| -- | -- |
| 21/1062320  | [Miguel Arthur](https://github.com/zlimaz) |
| 21/1062796 | [Mariiana Siqueira Neris](https://github.com/Maryyscreuza)  |

## Sobre 

Projeto desenvolvido para a disciplina **Projeto de Algoritmos** da Universidade de Brasília (UnB), ministrada pelo professor Maurício Serrano, no semestre 2026.1.

Este trabalho faz parte do Módulo 2 da disciplina (**Greed**) e consiste na implementação do Algoritmo **Interval Partitioning** (Particionamento de Intervalos) para otimizar o uso de servidores em nuvem, minimizando o número de máquinas necessárias para rodar um conjunto de "Batch Jobs".

Para demonstrar a implementação do algoritmo, foi desenvolvida uma aplicação web nativa com uma interface interativa que renderiza a alocação dos jobs num formato de Gráfico de Gantt.

### Como funciona o algoritmo?
1. Ordena-se os *Jobs* pelo seu tempo de início de forma crescente.
2. Mantém-se um registo do tempo em que cada servidor/recurso atribuído fica livre (o tempo de fim do seu último *Job*).
3. Para cada novo *Job*, o algoritmo verifica se há algum servidor que já tenha finalizado as suas tarefas antes da hora de início do *Job* atual.
4. Se sim, atribui o *Job* a esse servidor e atualiza o seu tempo de fim de serviço.
5. Se não houver servidores disponíveis, é alocado um novo servidor.
6. Desta forma, o algoritmo garante a alocação de todos os *Jobs* utilizando o número estritamente mínimo de servidores.

## Instalação 
Linguagem: **JavaScript (ES6+)**<br>
Estrutura e Estilos: **HTML5 e CSS3**<br>

O projeto foi desenvolvido em vanilla JS/HTML/CSS, sem necessidade de *frameworks* de backend ou dependências de pacotes complexas, com foco na clareza e interatividade do browser.

### Como executar

1. Clone o repositório para a sua máquina:
```bash
git clone https://github.com/projeto-de-algoritmos-2026/G21_Greed_PA-26.1.git
```

2. Entre no diretório do projeto:
```bash
cd G21_Greed_PA-26.1
```

3. Abra o ficheiro `index.html` em qualquer browser moderno (Chrome, Firefox, Edge, etc.) ou utilize uma extensão como o *Live Server* no VS Code.
```bash
# Exemplo no Linux ou macOS
xdg-open index.html
```

## Uso 
- Insira o nome do job, tempo de início e tempo de fim no formulário para adicionar novos Batch Jobs individualmente.
- Clique em **"Randomize"** para gerar um cenário complexo com 20 jobs aleatórios, simulando um ambiente real entre as 08:00 e as 18:00, para demonstrar o algoritmo em ação.
- O Gráfico de Gantt será atualizado automaticamente, mostrando a alocação dos jobs nos servidores utilizados, com métricas de eficiência.

## Vídeo de apresentação
*[(Link do Video - Grupo 21)](https://youtu.be/jK5sK0jRFkw)*
