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

## Implementação Detalhada

### Contexto dos Assentos

O `SeatsContext` gerencia o estado global da aplicação:

```javascript
// src/app/clientComponents/SeatsContext.jsx
export const SeatsProvider = ({ children }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [novaSessao, setNovaSessao] = useState(sessao);

  // Calcula o valor total quando os assentos são selecionados
  useEffect(() => {
    setValorTotal(selectedSeats.length * novaSessao.preco);
  }, [selectedSeats, novaSessao]);

  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seatNumber)
        ? prevSelectedSeats.filter((numero) => numero !== seatNumber)
        : [...prevSelectedSeats, seatNumber]
    );
  };
  
  // ... resto do código
};
```

### Grid de Assentos

O componente `SeatsGrid` renderiza os assentos de forma responsiva:

```javascript
// src/app/clientComponents/SeatsGrid.jsx
function Square({ color = "white", modifier = "" }) {
  const colorClasses = {
    "slate": "dark:bg-slate-600 bg-slate-400",  // Indisponível
    "white": "dark:bg-slate-100 bg-slate-800",  // Disponível
    "cyan": "bg-cyan-600",                      // Selecionado
  };

  return <div className={`${colorClasses[color]} size-8 rounded-md ${modifier}`}></div>;
}

export const SeatsGrid = () => {
  const { selectedSeats, toggleSeatSelection, novaSessao } = useSeats();

  return (
    <div className="flex justify-center items-center">
      <ul className="inline-grid grid-cols-8 gap-4 mx-6">
        {novaSessao.assentos.map((seat, index) => (
          // ... renderização dos assentos
        ))}
      </ul>
    </div>
  );
};
```

### Processamento de Compra

O `BuyButton` gerencia a finalização da compra:

```javascript
// src/app/clientComponents/BuyButton.jsx
export default function BuyButton() {
  const { valorTotal, novaSessao, selectedSeats, updateSessao } = useSeats();

  const handleClick = (event) => {
    event.preventDefault();
    
    if (selectedSeats.length > 0) {
      // Atualiza os assentos comprados para indisponíveis
      const newSessao = { ...novaSessao };
      selectedSeats.forEach(seatNumber => {
        const seatIndex = newSessao.assentos.findIndex(
          seat => seat.numero === seatNumber
        );
        if (seatIndex !== -1) {
          newSessao.assentos[seatIndex].disponivel = false;
        }
      });
      
      updateSessao(newSessao);
      // ... resto do código
    }
  };
}
```

### Estrutura do JSON

O arquivo `sessao.json` deve seguir este formato:

```json
{
  "titulo": "Nome do Filme",
  "horario": "19:30",
  "preco": 24.90,
  "assentos": [
    {
      "numero": 1,
      "disponivel": true
    },
    // ... mais assentos
  ],
  "sinopse": "Descrição do filme...",
  "dataLancamento": "01/01/2024",
  "direcao": "Nome do Diretor"
}
```

### Componentes de UI

O projeto usa componentes reutilizáveis para UI:

```javascript
// src/app/page.jsx
const TitleAndDescription = ({
  title,
  description,
  big = false,
  modifier = ""
}) => {
  return (
    <section className={"flex flex-col mt-5"}>
      {big ? (
        <div className={`flex flex-col items-center gap-1 ${modifier}`}>
          <h1 className={"font-bold text-4xl"}>{title}</h1>
          <h3 className={"font-thin text-3xl"}>{description}</h3>
        </div>
      ) : (
        // ... versão menor
      )}
    </section>
  );
};
```

## Dicas de Desenvolvimento

1. **Estado Global**: Use o hook `useSeats` para acessar o contexto:
```javascript
const { selectedSeats, valorTotal } = useSeats();
```

2. **Responsividade**: Use classes condicionais do Tailwind:
```javascript
className={"md:flex-row flex-col"}
```

3. **Tema Escuro**: Implemente variantes dark com Tailwind:
```javascript
className={"dark:bg-slate-900 bg-slate-200"}
```

## Demonstração Visual

### Visão Geral
![Visão geral do sistema](./public/images/overview.gif)
*Sistema completo em funcionamento*

### Funcionalidades Principais

#### Seleção de Assentos
![Seleção de assentos](./public/images/seat-selection.gif)
*Demonstração da seleção múltipla de assentos*

#### Tema Claro/Escuro
<div style="display: flex; gap: 10px;">
    <img src="./public/images/light-theme.png" width="400" alt="Tema claro">
    <img src="./public/images/dark-theme.png" width="400" alt="Tema escuro">
</div>

### Responsividade
<div style="display: flex; gap: 10px;">
    <img src="./public/images/mobile.png" width="200" alt="Versão mobile">
    <img src="./public/images/tablet.png" width="300" alt="Versão tablet">
    <img src="./public/images/desktop.png" width="400" alt="Versão desktop">
</div>

### Fluxo de Compra
![Processo de compra](./public/images/purchase-flow.gif)
*Demonstração do processo completo de compra*

### Interface do Usuário
#### Componentes Principais
![Componentes UI](./public/images/ui-components.png)
*Visão detalhada dos principais componentes da interface*

#### Estados dos Assentos
<div style="display: flex; gap: 10px;">
    <img src="./public/images/available.png" width="200" alt="Assento disponível">
    <img src="./public/images/selected.png" width="200" alt="Assento selecionado">
    <img src="./public/images/unavailable.png" width="200" alt="Assento indisponível">
</div>
