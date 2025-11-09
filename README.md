# Projeto Intermediário — Clean Code

## Integrantes
* [Jefferson Barzan Alexandrino](https://github.com/JeffAlexandrino)
* [Gabriel Angelo Kauffman](https://github.com/GabrielAKaufmann)
---

## Sobre o projeto
### Descrição
Atividade avaliativa da matéria de **Clean Code**, cujo objetivo é aplicar princípios de código limpo e boas práticas de programação em um projeto já desenvolvido anteriormente.

[Link da atividade no GitLab](https://gitlab.com/professor-rvenson/cleancode-2025-2/-/blob/main/projetos/abp01-refatoracao.md?ref_type=heads)

### Objetivo
* Identificar e eliminar *code smells*;
* Aplicar princípios do livro *Clean Code*;
* Criar uma suíte de testes unitários com cobertura parcial (~50%);
* Aplicar ferramenta de *linter* para padronização e estilo;
* Documentar o processo de refatoração e as melhorias obtidas.

---

## Tecnologias, bibliotecas e frameworks
1. [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
2. [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
3. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
4. [Bootstrap](https://getbootstrap.com/)
5. [React](https://react.dev/)
6. [ESLint](https://eslint.org/)
7. [Prettier](https://prettier.io/)
---

## Descrição do software original
### Nome do projeto
LibraryGuru

### Finalidade e contexto
O projeto consiste em um projeto digital desenvolvido para a disciplina de Front-End. Ele tem como objetivo explorar os conceitos e práticas relacionados à programação de HTML5, CSS e JavaScript na plataforma Visual Studio Code.

O projeto possui dois modos: o para clientes e o outro para funcinários. Os clientes podem visualizar os livros que estão em estoque e reservá-los para compra, enquanto os funcionários tem a visualização e controle do estoque de livros caso seja necessário repor, além de poder ver os pedidos feitos pelos clientes.

### Principais funcionalidades
1. Autenticação
- Login de usuários (clientes e funcionários);

2. Dashboard
- Exibição de informações gerais do sistema;
- Quantidade de livros, usuários e leituras cadastradas;
- Acesso rápido às principais seções administrativas.

3. Livros
- Listagem completa dos livros cadastrados;
- Formulário para cadastro e edição de livros;
- Tela detalhada com informações do livro selecionado.

4. Usuários
- Listagem dos usuários registrados;
- Formulário para adicionar e editar usuários;
- Visualização de detalhes do perfil de cada usuário.

### Estrutura original
Tela inicial com duas opções: ***cliente e funcionário*** <br>
**Parte cliente:** tela de login, tela para reservar livro. <br>
**Parte funcionário:** tela de login, tela para visualizar e controlar o estoque, tela para visualizar os pedidos dos clientes.

- Autenticação
  - Login
  - Esqueci a senha
- Dashboard
  - Informações da quantidade de livros, usuarios, e leituras cadastradas
- Livros
  - Lista de livros cadastradas
  - Formulário para cadastro de livros
  - Formulário para alterar um livro
  - Tela para visualizar detalhes do livro
- Usuários
  - Lista de usuários cadastradas
  - Formulário para cadastro de usuários
  - Formulário para alterar um usuário
  - Tela para visualizar detalhes do usuário

---

## Problemas identificados (Code Smells)
Durante a análise inicial, foram detectados os seguintes problemas no código:
Aqui estão os code smells resumidos para incluir no seu README:

**Code Smells Identificados:**

1. **Roteamento Duplicado** - Caminhos "/" e "" sem distinção clara
2. **Gestão de Estado Incorreta** - Uso inadequado do useState (reatribuição direta)
3. **Arquitetura HTML Fragmentada** - Múltiplos arquivos HTML estáticos e obsoletos
4. **Estilos Inconsistentes** - Mix de Tailwind, CSS personalizado e inline
5. **Lógica de Negócio nos Componentes** - Dados hardcoded e acoplamento
6. **Problemas de Acessibilidade** - Tags `<a>` como botões e má semântica
7. **Nomenclatura Inconsistente** - Mix de português e inglês nos nomes
8. **Código Duplicado** - Estruturas repetitivas em tabelas e formulários
9. **Falta de Componentização** - Blocos monolíticos sem reutilização
10. **Gestão de Estado Primitiva** - Arrays simples sem persistência

**Principais Impactos:**
- Manutenibilidade comprometida
- Inconsistência visual e funcional
- Baixa reutilização de código
- Dificuldade para testes e escalabilidade
- Problemas de acessibilidade e SEO

Estes problemas apontam para a necessidade de refatoração da arquitetura, padronização de convenções e implementação de melhores práticas do React.

## Estratégias e técnicas de refatoração
Para corrigir os problemas encontrados, foram aplicadas as seguintes práticas:

* **Renomeação de variáveis e funções** para aumentar clareza e semântica;
* **Criação de componentes reutilizáveis** para eliminar duplicação;
* **Extração de funções e módulos** para seguir o princípio de responsabilidade única (*Single Responsibility*);
* **Padronização de estilo e formatação** via *linter* (ex.: ESLint + Prettier);
* **Melhoria da hierarquia de diretórios** para facilitar a navegação e manutenção;
* **Remoção de comentários redundantes** e código morto;
* **Reorganização de dependências** para reduzir acoplamento entre partes do sistema.

---

## Testes 
### Estratégia de testes
Foi criada uma suíte de testes unitários para garantir o funcionamento correto das principais funções e componentes refatorados.

### Componente de Login (`Login.test.js`)
- **Renderização dos elementos principais**: Verifica se todos os elementos essenciais (título, campos de email, senha e botão de entrar) são renderizados corretamente
- **Interação com campos**: Testa a funcionalidade de digitação nos campos de email e senha, além da opção "Lembrar de mim"
- **Validação de campos obrigatórios**: Confirma que os campos de email e senha são marcados como obrigatórios
- **Navegação correta**: Verifica se os links de navegação possuem os destinos adequados

### Componente de Recuperação de Senha (`ForgotPassword.test.js`)
- **Renderização do componente**: Testa a exibição do título e elementos principais
- **Interação com campo de email**: Valida a funcionalidade de digitação no campo de email
- **Campo obrigatório**: Confirma que o campo de email é marcado como obrigatório
- **Mensagens de instrução**: Verifica a exibição das mensagens informativas para o usuário
- **Links de navegação**: Testa se os botões de "Enviar" e "Voltar" possuem os links corretos

### Cobertura de Testes

Os testes cobrem:
- **Renderização de componentes** e elementos UI
- **Interação do usuário** com campos de formulário
- **Validação de formulários** (campos obrigatórios)
- **Navegação e rotas** entre páginas
- **Funcionalidades críticas** de autenticação

#### Tecnologias Utilizadas nos Testes
- React Testing Library
- User Event para simulação de interações
- Jest como framework de teste

A suíte de testes garante que os componentes de autenticação funcionem conforme esperado, proporcionando uma base sólida para o desenvolvimento contínuo.

---
## Interface Fluente (Sugestão)

### O que é
Uma forma de escrever código que parece uma frase, encadeando métodos.

### Exemplos sugeridos
```javascript
// Busca de livros
const livros = new BuscaLivros()
  .porTitulo("Clean Code")
  .doAutor("Robert Martin")
  .ordenarPorData()
  .executar();

// Carrinho de compras
carrinho
  .adicionarLivro(livro1)
  .aplicarCupom("CLEAN10")
  .calcularFrete()
  .finalizarCompra();
```

### Onde implementar
- Filtros e buscas
- Configuração de componentes  
- Processos com múltiplos passos

**Observação:** Não foi implementado no código, mas seria uma melhoria futura para deixar o código mais legível.

---

### Frameworks e ferramentas utilizadas
* [Jest](https://jestjs.io/) — execução e cobertura de testes
* [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — testes de componentes React
---

## Instalação e execução
### Pré-requisitos

* Node.js 18+
* npm

### Passos

```bash
# Clonar o repositório
git clone https://github.com/JeffAlexandrino/Projeto_CleanCode

# Entrar na pasta
cd Projeto_CleanCode

# Instalar dependências
npm install

# Executar aplicação
npm run dev

# Executar testes
npm run test

# Caso dê erro, pode ser necessário fazer o seguinte comando antes de executar
npm install flowbite flowbite-react 
```

---

## Resultados alcançados
Após a refatoração, conseguimos:

- **Código mais limpo**: Eliminamos code smells e reduzimos duplicação
- **Organização melhorada**: Criamos componentes reutilizáveis e padronizamos a estrutura
- **Testes implementados**: Cobrimos funcionalidades críticas com testes unitários
- **Manutenção facilitada**: Código mais legível e fácil de dar manutenção

O projeto agora está mais organizado e seguindo boas práticas de desenvolvimento.

---

## Estrutura de branches

* **original** — versão antiga do projeto, sem refatorações.
* **main** — versão atualizada, refatorada e documentada.

---

## Referências

* Martin, Robert C. *Clean Code: A Handbook of Agile Software Craftsmanship*.
* Documentação oficial das bibliotecas e frameworks utilizados.
* Material de apoio da disciplina Clean Code.

---

## Histórico de versões
As alterações detalhadas estão registradas no arquivo [CHANGELOG.md](./CHANGELOG.md), seguindo o padrão [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
