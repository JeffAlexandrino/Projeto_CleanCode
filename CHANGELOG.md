# Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.
O formato segue as recomendações do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

---
## [1.0.3]
### Adicionado
* PDF da entrega 2.

### Removido
* Arquivos HTML desnecessários.
* Pasta LibraryGuru
* Comentários desnecessários.

### Update
* Organização dos imports nos arquivos.
* Aplicado formatação nos arquivos jsx usando prettier.


---
## [1.0.2]
### Adicionado
* Adicionado tratamento de erro ao carregar dados do localStorage.
* Implementado uso de constante STORAGE_KEY para chave de armazenamento.
* Adicionado tratamento para produto não encontrado em ExibeProduto.

### Update
* Refatorado ListaComprasContext para ShoppingListContext com nomes padronizados em inglês.
* Substituído array [items, setItems] por objeto { items, setItems } no Provider.
* Melhorada geração de ID com crypto.randomUUID() quando disponível.
* ProdutoExibe.jsx renomeado para ExibeProduto.
* Removido useState desnecessário em ExibeProduto.
* Substituída busca direta por useMemo para melhor performance em ExibeProduto.
* Padronização de nomes e melhoria da legibilidade em ExibeProduto.
* Em ListaCompras, refatorado ListaCompras para ShoppingList com nomes padronizados.
* Em ListaCompras, simplificada função addItem (agora handleAddItem) com validação clara.
* Em ListaCompras, substituído acesso ao contexto por objeto { items, setItems }.
* Em ListaCompras, melhorada renderização condicional e mensagens de erro.
---

## [1.0.1]
### Adicionado
* Novo README.
* Criado arquivo CHANGELOG.
* Criado branches para cada integrante.
