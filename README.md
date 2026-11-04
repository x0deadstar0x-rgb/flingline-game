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
| TAB or B | Menu: all tools, all spawnable items, maps, controls |
| T | Next spawn item |
| N | Fly mode |
| G | Slow motion |
| C / P | Clear what you spawned / reset the map |
| M / L | Mute / low graphics |
| [ / ] | Mouse sensitivity |

### Fling Line
Click to shoot your line and grab something. **Click again to throw it**, **F** drops it, **Z / X** shortens or extends the line, and **R** spins it.
**Pallets:** grab one and it flies wherever you look. Stand on it first to ride it.

## What's in it
- **34 tools:** Fling Line, Blaster, Shotgun, Minigun, Railgun, Lightning Gun, Flamethrower, Cannon, Home Run Bat, TNT Toss, Grenade Launcher, Rocket Launcher, Sticky Bombs, Black Hole, Fire Bomb, Meteor Strike, Airstrike, Nuke, Fireworks, Force Push, Magnet, Freeze Ray, Anti-Gravity Ray, Grow Ray, Shrink Ray, Paint Gun, Teleporter, Spawner, Eraser, Cloner, Rope Tool, Weld Tool, Balloon Tool, Thruster.
- **74 spawnable things:** blocks (wood, stone, brick, glass, ice, metal…), explosives (TNT, mega TNT, barrels, oil drums, gas canisters, fireworks, nukes, land mines, C4), balls, fun props (balloons, ducks, watermelons, presents, jelly…), furniture & cars, flying pallets, 9 kinds of dummies (zombie, ninja, robot, bouncy…) and 10 prefabs (walls, towers, jenga, bowling…).
- **4 maps:** Island, Flatlands, Hills (real terrain + lake), Sky Islands.
- **Everything interacts:** chain reactions, spreading fire, materials that break differently, freezing, floating in water, ropes and balloons, jump pads, and ragdolls that get back up.

## Develop

```bash
npm install
npm run build   # rebuilds game.bundle.js from src/
```

Source lives in `src/` (three.js for rendering, cannon-es for physics). The tools are in `src/tools/`, the maps in `src/map.js`, and the items in `src/items.js`.
