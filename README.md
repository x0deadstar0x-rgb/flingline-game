# Fling Zone

A 3D semi low-poly **physics sandbox** that runs in the browser. Grab things with your Fling Line, throw them across the map, blow everything up, set it on fire, and ride flying pallets.

**Controls are single click + keyboard only.** You never need a right-click or a two-finger click, so it works on any laptop touchpad.

## Play

- **Online:** turn on GitHub Pages (Settings → Pages → Deploy from branch → `main` / root) and open the link.
- **Locally:** double-click `index.html`. It's one prebuilt script (`game.bundle.js`), so it works straight from the file with no server needed.

## Controls

| Key | Action |
| --- | --- |
| Mouse / touchpad | Look (arrow keys work too) |
| Click (or Enter) | Use tool. Hold for auto tools |
| W A S D / Space / Shift | Move / jump (double jump) / sprint |
| 1–0 | Hotbar slots |
| Q / E | Swap the tool in the current slot |
| TAB or B | Menu: tools (with hotbar editor + search), spawn items, maps, controls |
| T | Next spawn item |
| N | Fly mode |
| G | Slow motion |
| C / P | Clear what you spawned / reset the map |
| M / L | Mute / low graphics |
| [ / ] | Mouse sensitivity |

### Fling Line
**Click** grabs something with your line (short reach, so get close). **Click again** drops it, **F throws it**, **Z / X** shortens or lengthens the line, and **R** spins what you're holding.

## What's in it
- **34 tools:** Fling Line, Blaster, Shotgun, Minigun, Railgun, Lightning Gun, Flamethrower, Cannon, Home Run Bat, TNT Toss, Grenade Launcher, Rocket Launcher, Sticky Bombs, Black Hole, Fire Bomb, Meteor Strike, Airstrike, Nuke, Fireworks, Force Push, Magnet, Freeze Ray, Anti-Gravity Ray, Grow Ray, Shrink Ray, Paint Gun, Teleporter, Spawner, Eraser, Cloner, Rope Tool, Weld Tool, Balloon Tool, Thruster.
- **90 spawnable things:** blocks (wood, stone, brick, glass, ice, metal, concrete, hay…), explosives (TNT, mega TNT, barrels, oil drums, gas canisters, fireworks, nukes, land mines, C4), balls, fun props (balloons, ducks, watermelons, snowballs, cacti, presents…), furniture, cars, street lamps, pallets, 9 kinds of dummies (zombie, ninja, robot, bouncy…) and 19 structures (house, bridge, skyscraper, fort, arch, igloo, snowman, walls, towers, jenga, bowling…).
- **8 maps:** Island, City, Flatlands, Hills, Desert Canyon, Snowy Peaks, Playground, Sky Islands.
- **Breakable ground:** explosions dig real craters into the terrain (they fill with water near the sea).
- **3D sound:** sounds come from where they happen, fade with distance and pan left/right; each material and action has its own sound.
- **Everything interacts:** chain reactions, spreading fire, materials that break differently, freezing, floating in water, ropes and balloons, jump pads, and ragdolls that get back up.

## Develop

```bash
npm install
npm run build   # rebuilds game.bundle.js from src/
```

Source lives in `src/` (three.js for rendering, cannon-es for physics). The tools are in `src/tools/`, the maps in `src/map.js`, and the items in `src/items.js`.
