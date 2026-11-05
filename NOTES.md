# Fling Zone — notes for the next session

Static browser game: `index.html` + prebuilt `game.bundle.js` (run `npm run build` after editing `src/`).
three.js render, cannon-es physics, first person only, single click + keyboard controls.

## Layout
- `src/main.js` loop, input, settings wiring · `src/player.js` player/camera/viewmodel
- `src/items.js` materials, item catalog (90), prefabs, damage/break/explode, fire, ropes/welds
- `src/dummy.js` NPC dummies (standing AI + ragdoll) · `src/map.js` 8 maps, breakable heightfield terrain (craters), time of day
- `src/tools/*` 34 tools (grab.js = Fling Line: click grab/drop, F throw, Z/X length)
- `src/ui.js` + `index.html` black & white HUD/menu (tools, spawn, maps, settings, controls) · `src/settings.js` saved settings
- `src/audio.js` positional procedural sound

## Done (not yet merged to main): settings tab, day/sunset/night, U = undo spawn, spawner ghost preview, smaller viewmodel.

## TODO (user requests)
1. Fling Line R: controlled rotate (hold R + mouse rotates held object, holds orientation) instead of spin.
2. Smarter dummies: avoid edges reliably (also when fleeing), health + knock-out/death + respawn, people-like behaviors (walk to points, chat, wave, look around, flee danger).
3. More block types + BIG breakable structures (use 2 m blocks to keep body count down).
4. Force Push: push the player opposite to look direction (any direction), keep the look-down jump.
5. Balloons rise too fast (free balloon accel ~87 m/s²): lower lift, add drag, cap speed.
6. Rope/weld: worked in testing; wooden objects break on impact which deletes the rope/weld. Rope has no damping (orbits forever) — add damping / make it a proper slack constraint.
