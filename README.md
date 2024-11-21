# Pix payment case financial app

Projeto tem como objetivo simular um caso de uso envolvendo uma jornada de pagamento via PIX utilizando cartão de crédito. Para isso o sistema permite transferir um valor fixo de R$ 100,00 escolhendo o método de pagamento saldo em conta ou cartão de crédito. Ao utilizar o método por cartão de crédito o sistema apresenta opções de parcelamentos e o valor final de acordo com o número de parcelas selecionados.

## Projeto

A organização do projeto é baseada no padrão de `Package by Feature`. A estrutura está dividida em três principais módulos: app, features, e shared.

#### **`app/`**

Responsável por gerenciar as rotas da aplicação, diretamente associada a biblioteca de navegação [expo router](https://docs.expo.dev/router/introduction/).

#### **`features/`**

Contém as funcionalidades da aplicação, organizadas por contexto ou funcionalidade. Nesse projeto apresenta duas features `home` apenas para definir a rota inicial do app e `bank-transfer` com a implementação da jornada de pagamento.

#### **`shared/`**

Módulo para código reutilizável, como componentes, hooks, utilitários e estilos.

## Principais bibliotecas

[expo-router](https://docs.expo.dev/router/introduction/) - navegação
[nativewind](https://www.nativewind.dev/) - estilização

## Instalação e execução

1. Instale as dependências:

```bash
npm install
```

2. Executar o projeto

```bash
npx expo start
```

O projeto utiliza o expo managed workflow, logo é possível rodar utilizando [expo go](https://expo.dev/go).
