# Fling Zone — notes for the next session

Static browser game: `index.html` + prebuilt `game.bundle.js` (run `npm run build` after editing `src/`).
three.js render, cannon-es physics, first person only, single click + keyboard controls.

## Layout
- `src/main.js` loop, input, settings wiring · `src/player.js` player/camera/viewmodel
- `src/items.js` materials, item catalog (112), prefabs + big builds (`BIG`), damage/break/explode, fire, ropes/welds, balloons
- `src/dummy.js` NPC dummies: AI modes (idle/walk/chat/wave/flee), edge-safe steering (`safeDir`/`pathOk`), health/KO/death/respawn, hp bar
- `src/map.js` 8 maps, breakable heightfield terrain (craters), time of day
- `src/tools/*` 34 tools (grab.js = Fling Line: click grab/drop, F throw, Z/X length, hold R + mouse rotate)
- `src/ui.js` + `index.html` HUD/menu (tools, spawn, maps, settings, controls), dark + light theme · `src/settings.js` saved settings
- `src/audio.js` positional procedural sound

## Done
- Settings tab, day/sunset/night, U = undo spawn, spawner ghost preview, smaller viewmodel.
- Fling Line: hold R + mouse rotates the held object (camera stays still); it keeps that orientation relative to your facing.
- Dummies: health (100, robots 250), impact/bullet/explosion/fire damage, headshots x2, KO (stars, 4–7 s), death (grey, 6 s, respawn at home), slow regen, hp bar after hits.
  Behaviours: walk to random ground points, idle look-around, chat in pairs, wave at the player, flee booms/fire/black holes/zombies. Every move is checked for edges, drops, water and walls (also while fleeing).
  Tested: Sky Islands with repeated scares, 43 falls → 1 in ~43 s of game time.
- 16 new blocks (2 m blocks, sandstone, marble, obsidian, thick glass, steel plate, bouncy, foam) + 6 big builds (castle 90 bodies, tower 72, pyramid 55, wall 35, colosseum 72, glass tower 48). They all stand on their own when spawned on clear ground (map props inside the footprint will knock them).
- Force Push pushes you opposite to where you look (13 m/s), look-down rocket jump kept.
- Balloons: free ones rise gently (~2 m/s), tied ones capped at 5 m/s; lift fades near top speed.
- Ropes: sideways damping when taut (no endless orbiting). Ropes and welds move to the nearest piece when an object breaks.
- Light mode (Settings → Theme).

## Ideas / next
- Big builds ignore map props in the footprint; could check for clear ground first and warn.
- Dummies could react to being held (flail), sit on benches, or form groups.
- Health/KO counts in the HUD stats (G.stats.kos exists).
