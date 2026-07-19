# lean4-lorenz

A [Lean 4](https://leanprover.github.io/) / [Mathlib](https://github.com/leanprover-community/mathlib4) formalization of the **Lorenz system** — the classical model of deterministic chaos introduced by Edward N. Lorenz in 1963:

$$
\dot{x} = \sigma (y - x), \qquad
\dot{y} = x(\rho - z) - y, \qquad
\dot{z} = xy - \beta z .
$$

Developed at the **ICARM summer school on formalization** (Carnegie Mellon University, July 2026).

## What is formalized

- **Parameters and vector field.** The Lorenz parameters $\sigma, \rho, \beta > 0$ and the associated vector field on $\mathbb{R}^3$.
- **Equilibria.** A definition of equilibrium points of the system, together with a first lemma: *the origin is always an equilibrium*.
- **Trapping region lemma.** The main result: there exists a bounded ellipsoid $E$ that is a trapping region for the Lorenz flow — the time-one map $T$ of the flow sends $E$ into the interior of $E$.

## Repository structure

```
LeanLorenz/
├── Basic.lean            -- parameters, vector field, equilibria
├── TrappingRegion.lean   -- the trapping region lemma
lakefile.toml
lean-toolchain
```

*(Adjust the file names above to match your actual layout.)*

## Building

This project uses [Lake](https://github.com/leanprover/lean4/tree/master/src/lake), Lean's build tool, and depends on Mathlib.

```bash
# clone the repository
git clone https://github.com/<your-username>/lean4-lorenz.git
cd lean4-lorenz

# fetch the Mathlib cache (avoids compiling Mathlib from scratch)
lake exe cache get

# build the project
lake build
```

You will need [elan](https://github.com/leanprover/elan), the Lean toolchain manager; the correct Lean version is pinned in `lean-toolchain`.

## Mathematical background

The Lorenz system is a three-dimensional system of ordinary differential equations originally derived as a simplified model of atmospheric convection. For the classical parameter values $\sigma = 10$, $\rho = 28$, $\beta = 8/3$ it exhibits chaotic behavior on the famous butterfly-shaped Lorenz attractor.

The trapping region result is a first step toward studying the attractor formally: since all trajectories eventually enter and never leave a bounded ellipsoid, the system possesses a compact attracting set.

## Acknowledgments

This project was started at the ICARM summer school on computer-assisted reasoning in mathematics, held at Carnegie Mellon University, July 7–17, 2026. Thanks to the organizers and lecturers for their guidance.

## License

[Apache 2.0](LICENSE) *(or your license of choice — Apache 2.0 matches Mathlib's license.)*
