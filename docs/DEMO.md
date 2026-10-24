# Guided walkthrough · Guia de exploração

## English

### Start with a concrete question

What should a facilitator's workflow allow after a pause, a refusal or withdrawal?

1. Open [the featured example](https://galafis.github.io/vbot-inclusive-encounter-kit/?lang=en&example=pause-and-resume).
2. Read the short scenario description and the four result cards.
3. The expected starting result is **active · recording: false · 0 rejected**.
4. Read the graphic together with the explanation. Unknown, rejected or unconfirmed values are useful evidence rather than something to hide.
5. Use the guided controls. Restore the example to recover the original assumptions.
6. Switch to another story in the five-card example selector. Compare the table in [EXPERIMENTS](EXPERIMENTS.md).
7. Download an HTML report for a self-contained, printable copy; download CSV for the visible evidence table; download JSON for the complete calculated study. These files stay on your computer until you choose to share them.

### Go deeper

1. Separate participation and recording choices, with a finite state machine.
2. Interactive choice buttons constrained by the workflow's current state.
3. Pause removes recording permission; resume does not inherit it.
4. Withdrawal is final for the session; a new invitation starts a new encounter.
5. A minimal journal and recording sequence windows without free-text input disclosure.

For full scenario changes, open **Advanced: edit the scenario**. Applying invalid JSON or invalid domain data reports an error instead of accepting the changes. Local guided changes recompute through the same domain implementation used by the command line.

### Accessibility and small screens

All primary controls have labels, buttons work by keyboard and the layout adapts to a narrow screen. Charts have accessible titles and adjacent explanations/tables. Colors support text labels rather than replacing them. These implementation choices do not establish conformance certification or a completed screen-reader audit.

## Português

Abra [o exemplo em português](https://galafis.github.io/vbot-inclusive-encounter-kit/?lang=pt&example=pause-and-resume), leia a descrição e os quatro indicadores. O resultado inicial é **active · gravação: false · 0 rejeições**.

Examine o gráfico e a explicação, ajuste um controle e use **Restaurar este exemplo** para recuperar a hipótese inicial. Selecione outro cenário para comparar. Os botões baixam relatório HTML imprimível, tabela CSV ou análise JSON. O modo avançado fica recolhido para que o estudo possa ser explorado sem editar código.

As alterações são cálculos de software e não ações sobre o robô. A execução com hardware usará apenas funções e práticas permitidas pelo fabricante.
