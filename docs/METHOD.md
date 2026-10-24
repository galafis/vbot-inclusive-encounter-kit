# Method and contract · Método e contrato

## Input / Entrada

Every scenario is a JSON object with `version: 1`. Numeric strings, non-finite numbers and truthy substitutes for booleans are refused. The engine does not modify input. Extra fields are ignored; use synthetic data in public examples.

events: at most 1000 objects with type in accept/decline/pause/resume/withdraw/record_grant/record_revoke/finish. Invalid transitions are reported, unknown event types reject the scenario. Extra fields are ignored and not copied to output.

## Algorithm / Algoritmo

Finite state machine starts invited. Accept enters active; decline/withdraw ends. Pause disables recording; resume does not restore recording consent. Recording additionally requires an active session and a separate grant. Public export whitelists sequence/type/state/recording only; free text and identifiers are dropped.

## Independent calculation / Cálculo independente

Accept -> grant -> pause -> resume leaves the workflow active with recording off. A new independent grant is needed. Withdraw ends the session and later accept/grant events are rejected. The operator must verify the robot and app states separately.

## Interpretation / Interpretação

A facilitator workflow using native app/operator controls only. The journal records software decisions, never proof that Vbot stopped moving or recording. No diagnosis or therapy.

PT: A entrada usa JSON na versão 1. As unidades estão nos nomes dos campos. Erros de contrato interrompem a análise. Campos adicionais não viram evidência. A implementação e os exemplos não demonstram desempenho do robô nem benefício social já validado.

## Derived interaction insights in v0.2

Recording windows are inclusive ranges of journal sequence numbers where recording permission is true. The insight layer counts recording steps and accepted pauses; it does not assign timestamps or durations. Available actions are derived from the final workflow state. A new invitation resets the simulated event list; undo removes only the latest simulated step.

A participant can decline at invitation or withdraw from an active/paused encounter. Pause disables recording permission. Resume re-enters active with recording still off. Ended sessions expose no actions; the event replay retains attempted invalid transitions as rejected records.

The public journal deliberately whitelists fields. It cannot confirm that a physical microphone/camera stopped, that a robot is motionless, or that a cloud copy was deleted. A facilitator must check native device controls separately. There is no participation score, diagnosis or therapeutic outcome.

Core replay is O(n) in events, with at most 1,000 events. Choice histories are software demonstrations and are not human-subject research records by default.

PT: Janelas são intervalos de números de sequência, não segundos. O fluxo mantém participação e gravação separadas. Desfazer e novo convite afetam apenas a simulação. O estado real do dispositivo precisa ser conferido pelo operador.
