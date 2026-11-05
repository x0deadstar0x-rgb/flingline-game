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
- Big builds: the Spawner draws the footprint (white = fits, red = blocked) and refuses to build on gaps/water, bumpy ground, or over map props / heavy objects (incl. another big build). `checkBig()` in items.js.
- Held dummies flail their arms and legs. HUD shows KOS (knock-outs + downs, each counted once).
- Fixed old bug: a dummy knocked over before its first frame (Balloon Dummy always) became a ragdoll at the world origin instead of where it was spawned.

- Big builds show a see-through ghost of the whole structure (white/red) — tested to match the real blocks exactly.
- Dummies sit down for a rest, and pick up small things (balls, ducks, melons, small crates, bricks…; no explosives/balloons/tied things), carry them overhead, then toss them (often at another dummy). Knocking a carrier, a threat, or grabbing the item with the Fling Line makes them drop it.

- Seats: new Park Bench item + couches have seat spots (`def.seats`, `def.hh` for ground placement). Dummies walk to a free seat, sit (kinematic body, sit pose), chat with whoever sits next to them, and get up when time's up, when scared, when the seat moves/tips, or when something flies into them. Benches placed on Island and City. Island couch no longer floats 0.65 m in the air.
- Chat groups: up to 5 dummies stand in a circle and take turns talking (`ai.group`).
- Zombies chase the closest of you or a living dummy; a caught dummy gets hurt and knocked over (dummies already run from zombies within 8 m).

- Smooth drawing: meshes (items, ragdolls, standing dummies, carried things) are drawn at the interpolated physics position (`drawPos`/`drawQuat` in core.js). Before, on 120/144 Hz screens things froze for 1–2 frames then jumped (looked like bobbing/stutter). Tested with a faked 144 Hz clock: frames with no movement 84/143 → 1/143.

## Ideas / next
- Dummies could cheer or panic as a crowd when something big happens nearby.
- Seats on more furniture (bed, table edge) and on the other maps.
