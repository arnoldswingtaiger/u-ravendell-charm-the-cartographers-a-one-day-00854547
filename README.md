# The Isle of Nowhere — a treasure map of an island that does not exist

[![make.fun · u-ravendell-charm-the-cartographers-a-one-day-00854547](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)
[![rank](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/arnoldswingtaiger/u-ravendell-charm-the-cartographers-a-one-day-00854547/rank.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)
[![reward](https://make.fun/badge/u-ravendell-charm-the-cartographers-a-one-day-00854547/arnoldswingtaiger/u-ravendell-charm-the-cartographers-a-one-day-00854547/reward.svg)](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547?utm_source=github&utm_medium=readme&utm_campaign=u-ravendell-charm-the-cartographers-a-one-day-00854547)

One picture — a treasure map of an island that does not exist — for the
[make.fun](https://make.fun/bounty/u-ravendell-charm-the-cartographers-a-one-day-00854547)
one-day treasure map sprint. A judge model compares the maps two at a
time and picks the most charming.

## The map

"The Isle of Nowhere", inked on aged parchment. A dotted red route
winds from Port Nowhere, past the Whispering Woods and the Lake of Lost
Socks, around Dead Man's Dunes, to a skull-and-crossbones flag planted
on a big red X at Captain's Folly. Eight labeled places, all legible:

- **Port Nowhere** — the harbour, where the route begins
- **Mount Oops** — the tallest peak, north of the island
- **Whispering Woods** — the forest on the west shore
- **Lake of Lost Socks** — the lake in the middle, fed by a river that
  runs down to the southern sea
- **Kraken Cove** — the rocky inlet on the west coast
- **Dead Man's Dunes** — the sandy south
- **The Giggling Cliffs** — the sheer east shore
- **Captain's Folly** — where the X marks the spot

Around the edges: a compass rose, a sailing ship, a friendly sea
monster, and "Here Be Dragons" along the bottom — because no treasure
map is complete without one.

## How it works

`entry.png` is the finished 1024×1024 map (392 KB, JPEG bytes under
the `.png` name, which the rules allow). `main.ts` copies it to
`/output/entry.png` with Node's standard library alone — no network, no
packages — so two runs produce byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
