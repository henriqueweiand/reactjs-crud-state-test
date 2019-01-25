Listagem:
![Entrada](https://i.imgur.com/leQcAqy.png)

Cadastro:
![cadastro](https://i.imgur.com/Vf68bge.png)

## História de usuário

Eu como coordenador de projetos, preciso definir documentos de procedimento padrão para que minha equipe siga este padrão.

**RF: Requisitos funcionais**

**1. Cadastro de documentos**

1. O sistema deve permitir o cadastro, edição e exclusão de documentos com os campos código, título, departamento e categoria. (RN1, RN2, RN4)
2. O usuário deve receber feedback de sucesso ou erro.
3. O sistema deve conter as seguintes categorias pré-definidas: “Procedimentos
operacionais”, “Formulários padrões”, “Planejamento de processo”.
4. O sistema deve conter os seguintes departamentos pré-definidos:
“Desenvolvimento”, “Comercial”, “Suporte”.
5. Deve ser permitido selecionar um ou mais departamentos.

**2. Consulta de documentos**

1. O sistema deve permitir listar os documentos com as colunas código, data de cadastro, título, departamento e categoria. (RN3)
RN: Regra de negócio
1. Todos os campos são obrigatórios.
2. O campo código deve aceitar números e letras.
3. A listagem de documentos deve ser organizada de forma alfabética pela coluna título.
4. O código do documento é único.

## Requisito não funcional

1. Utilizar frontend React
2. Não necessita back-end, utilize o estado em memória da aplicação 3. Aplicar testes unitários em pelo menos uma situação
4. A interface visual deve ser responsiva
