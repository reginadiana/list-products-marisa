## Descrição do projeto

Ecomerce do tipo Marisa. O objetivo principal é apresentar uma lista de items e construir todo o fluxo para a escolher, pagar e finalizar compras. Também apresentar layout baseado no site original, mas realizando melhorias de UI. As histórias para construção desse projeto podem ser vistas neste [_board_](https://github.com/users/reginadiana/projects/4)

:star: [Figma](https://www.figma.com/file/3hXtwB6U7DRJMdObzqEQus/marina-lista-de-produtos?node-id=217-3&t=RFZUiE2zfRA6XNft-0)

## Executando a aplicação

### Requisitos

:books: [Docker](https://docs.docker.com/desktop/install/linux-install/) 

:books: [Docker Compose](https://docs.docker.com/compose/install/)

### Construindo e executando ambiente

```bash
$ docker-compose build

$ docker-compose run --rm --service-ports app bash

$ yarn start
```

Acesse a aplicação em [localhost:3001](http://localhost:3001/)
