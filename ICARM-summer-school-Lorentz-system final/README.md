# ICARM Summer School — Lorenz system

A [Lean 4](https://leanprover.github.io/) / [Mathlib](https://github.com/leanprover-community/mathlib4)
project developed for the **ICARM summer school**, formalizing the **Lorenz
system** — the classical model of deterministic chaos introduced by Edward N.
Lorenz in 1963:

$$
\dot x = \sigma\,(y - x), \qquad
\dot y = x\,(\rho - z) - y, \qquad
\dot z = x\,y - \beta\,z.
$$

> **Note on the name.** The repository name keeps the spelling used when it was
> created ("Lorentz"); the dynamical system itself is conventionally spelled
> *Lorenz* (after Edward Lorenz), which is the spelling used throughout the
> mathematical content.

## Contents

- [`ICARMSummerSchoolLorentzSystem/Basic.lean`](ICARMSummerSchoolLorentzSystem/Basic.lean)
  — the parameters, the vector field, a notion of equilibrium, and a first
  lemma that the origin is always an equilibrium. A starting point to be
  extended during the school.

## Getting started

You need [`elan`](https://github.com/leanprover/elan) (the Lean toolchain
manager); it will install the exact Lean version pinned in
[`lean-toolchain`](lean-toolchain) automatically.

```bash
# clone the repository, then from its root:
lake exe cache get   # download the prebuilt Mathlib cache (recommended)
lake build           # build the project
```

Opening the folder in VS Code with the **Lean 4** extension gives you the
interactive editor with goal state, hovers, and error reporting.

## Dependencies

- **Lean** `v4.32.0` (pinned in `lean-toolchain`)
- **Mathlib** `v4.32.0` (pinned in `lakefile.toml`)

## License

Unless stated otherwise, this project is released under the Apache-2.0 License.
