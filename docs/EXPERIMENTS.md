# Reproducible experiments · Experimentos reproduzíveis

All examples are synthetic, deterministic and versioned. The visible interface, command-line engine and expected files share the same input. Each example asks a different question; some intentionally show limited evidence or poor language coverage.

### Encounter with withdrawal / Encontro com retirada

Permissions change during an encounter ended by choice.

Permissões são revistas durante o encontro, que termina por escolha.

- Input: [examples/baseline.json](../examples/baseline.json)
- Expected core output: [examples/expected.json](../examples/expected.json)
- Reproduced result: **ended · recording: false · 0 rejected**

```sh
node cli.mjs examples/baseline.json
node study.mjs examples/baseline.json
```

### Invitation declined / Convite recusado

Declining ends the invitation without requiring participation.

Recusar encerra o convite sem exigir participação.

- Input: [examples/invitation-declined.json](../examples/invitation-declined.json)
- Expected core output: [examples/invitation-declined.expected.json](../examples/invitation-declined.expected.json)
- Reproduced result: **ended · recording: false · 0 rejected**

```sh
node cli.mjs examples/invitation-declined.json
node study.mjs examples/invitation-declined.json
```

### Pause and resume / Pausar e retomar

Resuming participation does not restore recording permission.

Retomar a participação não restaura a permissão de gravação.

- Input: [examples/pause-and-resume.json](../examples/pause-and-resume.json)
- Expected core output: [examples/pause-and-resume.expected.json](../examples/pause-and-resume.expected.json)
- Reproduced result: **active · recording: false · 0 rejected**

```sh
node cli.mjs examples/pause-and-resume.json
node study.mjs examples/pause-and-resume.json
```

### Withdrawal is final / Retirada é final

Attempts to resume after withdrawal are recorded as rejected.

Tentativas de retomar depois da retirada ficam registradas como rejeitadas.

- Input: [examples/withdrawal-final.json](../examples/withdrawal-final.json)
- Expected core output: [examples/withdrawal-final.expected.json](../examples/withdrawal-final.expected.json)
- Reproduced result: **ended · recording: false · 3 rejected**

```sh
node cli.mjs examples/withdrawal-final.json
node study.mjs examples/withdrawal-final.json
```

### Recording is a separate choice / Gravação é outra escolha

A recording request before accepting participation does not authorize it.

Pedir gravação antes de aceitar o encontro não a autoriza.

- Input: [examples/recording-separate.json](../examples/recording-separate.json)
- Expected core output: [examples/recording-separate.expected.json](../examples/recording-separate.expected.json)
- Reproduced result: **ended · recording: false · 1 rejected**

```sh
node cli.mjs examples/recording-separate.json
node study.mjs examples/recording-separate.json
```

## What the checks establish

`npm run check` runs 19 tests and checks all five expected-output files. Domain/insight tests include independently derived cases and invariants. Golden expected files detect regressions; they are generated reference outputs, not independent scientific validation. Browser presentation is reviewed separately.

## What remains open

No physical Vbot trial was performed. Native feature behavior, battery/load response, participant experience and public benefit remain to be evaluated on a specific device under an authorized plan. Documentation and reproducibility make those future questions reviewable; they do not answer them.

## Português

Os cinco cenários são fictícios e reproduzíveis. Cada um explicita uma pergunta e o arquivo de resultado esperado. Os testes incluem casos com cálculos independentes e invariantes; as saídas de referência detectam regressões. Resultados em software não substituem medições físicas ou avaliação de benefício social.
