# Tutorial: Sistema de Reserva de Assentos com Next.js e TailwindCSS

Este tutorial irá guiá-lo na criação de um sistema de reserva de assentos para cinema usando Next.js e TailwindCSS.

## Pré-requisitos

- Node.js instalado
- Conhecimento básico de React e TailwindCSS

## Passo 1: Configuração Inicial

Primeiro, crie um novo projeto Next.js:

```bash
npx create-next-app@latest go-tickets
cd go-tickets
```

Durante a configuração, selecione:
- ✅ TailwindCSS 
- ✅ ESLint
- ✅ `src/` directory
- ✅ `app/` router

## Passo 2: Estrutura de Arquivos

Crie a seguinte estrutura de diretórios:

```
src/
  ├── app/
  │   ├── clientComponents/
  │   │   ├── SeatsContext.jsx
  │   │   ├── SeatsGrid.jsx
  │   │   └── BuyButton.jsx
  │   ├── fonts/
  │   │   ├── GeistVF.woff
  │   │   └── GeistMonoVF.woff
  │   ├── layout.jsx
  │   ├── page.jsx
  │   └── sessao.json
```

## Passo 3: Configuração do Contexto

O `SeatsContext.jsx` gerenciará o estado global dos assentos. Ele mantém:
- Lista de assentos selecionados
- Valor total da compra
- Estado da sessão

## Passo 4: Componente de Grid de Assentos

O `SeatsGrid.jsx` renderiza a grade de assentos com:
- Assentos disponíveis (brancos)
- Assentos selecionados (ciano)
- Assentos indisponíveis (cinza)

## Passo 5: Botão de Compra

O `BuyButton.jsx` gerencia:
- Exibição do valor total
- Processamento da compra
- Atualização dos assentos após a compra

## Passo 6: Layout e Estilização

1. Configure as fontes personalizadas no `layout.jsx`
2. Use TailwindCSS para estilização responsiva
3. Implemente o tema claro/escuro

## Passo 7: Página Principal

No `page.jsx`, organize os componentes:
- Título e informações do filme
- Grid de assentos
- Indicador de tela
- Legenda dos assentos
- Botão de compra

## Funcionalidades Principais

- 🎫 Seleção múltipla de assentos
- 💰 Cálculo automático do valor total
- 🔄 Atualização em tempo real do estado dos assentos
- 🌓 Suporte a tema claro/escuro
- 📱 Design responsivo

## Como Usar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse `http://localhost:3000`

## Estrutura de Dados

O arquivo `sessao.json` deve conter:
- Título do filme
- Horário da sessão
- Preço
- Lista de assentos com estado de disponibilidade
- Informações adicionais do filme

## Personalização

Você pode personalizar:
- Cores dos assentos no `SeatsGrid.jsx`
- Layout da grade alterando `grid-cols-8`
- Estilos dos componentes via TailwindCSS
