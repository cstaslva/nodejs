# Desafio de Projeto: Mario Kart (CLI)
<img src="./docs/header.gif" width="76px">

**Objetivo**: Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.

## 🕹️ Players
- **Mario**
    - <img src="./docs/mario.gif" width="38px">
    - Velocidade: 4
    - Manobrabilidade: 3
    - Poder: 3
- **Peach**
    - <img src="./docs/peach.gif" width="38px">
    - Velocidade: 3
    - Manobrabilidade: 4
    - Poder: 2
- **Yoshi**
    - <img src="./docs/yoshi.gif" width="38px">
    - Velocidade: 2
    - Manobrabilidade: 4
    - Poder: 3
- **Bowser**
    - <img src="./docs/bowser.gif" width="38px">
    - Velocidade: 5
    - Manobrabilidade: 2
    - Poder: 5
- **Luigi**
    - <img src="./docs/luigi.gif" width="38px">
    - Velocidade: 3
    - Manobrabilidade: 4
    - Poder: 4
- **Donkey Kong**
    - <img src="./docs/donkey-kong.gif" width="38px">
    - Velocidade: 2
    - Manobrabilidade: 2
    - Poder: 5

## 📌 Regras
- O Computador deve receber `dois personagens` para disputar a corrida em um objeto cada
- Os personagens irão correr em uma pista aleatória de `cinco rodadas`
- A cada rodada, será sorteado um bloco da pista que pode ser uma `RETA`, `CURVA` ou `CONFRONTO`
- Caso o bloco da pista seja uma `RETA`, o jogador deve jogar um dado de 6 lados e somar o atributo `VELOCIDADE`, quem vencer ganha 1 ponto
- Caso o bloco da pista seja uma `CURVA`, o jogador deve jogar um dado de 6 lados e somar o atributo `MANOBRABILIDADE`, quem vencer ganha 1 ponto
- Caso o bloco da pista seja um `CONFRONTO`, o jogador deve jogar um dado de 6 lados e somar o atributo `PODER`, quem perder, perde 1 ponto
- Nenhum jogador pode ter pontuação negativa (valores abaixo de 0)
- Ao final, vence quem acumulou mais pontos

## 📎 Outros (Regras em construção)
- **Confronto**
    - Sortear aleatoriamente se é um casco (perde 1 ponto) ou se é uma bomba (perde 2 pontos).
    - Quem vencer o confronto pode ganhar um turbo (ganha 1 ponto) aleatoriamente.
