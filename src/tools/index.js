// Tool registry: every tool in the game, in menu order.
import { handsTool, grappleTool } from './grab.js';
import { gunTools } from './guns.js';
import { boomTools, updateBlackHoles } from './explosives.js';
import { rayTools } from './rays.js';
import { buildTools } from './construct.js';
import { digTools } from './dig.js';
import { updateProjectiles } from './common.js';

export const TOOLS = [handsTool, grappleTool, ...gunTools, ...boomTools, ...rayTools, ...buildTools, ...digTools];
export const TOOL = Object.fromEntries(TOOLS.map((t) => [t.id, t]));
export const TOOL_GROUPS = [
  ['Hands & Moving', [handsTool, grappleTool]], ['Weapons', gunTools], ['Explosives', boomTools], ['Rays & Forces', rayTools], ['Build', buildTools], ['Dig & Blocks', digTools],
];
export const DEFAULT_HOTBAR = ['hands', 'grapple', 'blaster', 'rocket', 'tnt', 'flamer', 'blackhole', 'push', 'spawner', 'bat'];
export { updateBlackHoles, updateProjectiles };

// ready-made hotbars (click one in the Tools menu to get all ten tools at once)
export const PRESET_LOADOUTS = [
  { name: 'Starter', tools: [...DEFAULT_HOTBAR] },
  { name: 'Demolition', tools: ['hands', 'tnt', 'rocket', 'grenade', 'sticky', 'cannon', 'meteor', 'airstrike', 'nuke', 'minigun'] },
  { name: 'Gunslinger', tools: ['hands', 'blaster', 'shotgun', 'minigun', 'sniper', 'lightning', 'flamer', 'cannon', 'grenade', 'rocket'] },
  { name: 'Builder', tools: ['hands', 'spawner', 'weld', 'rope', 'balloon', 'thruster', 'clone', 'eraser', 'freeze', 'paint'] },
  { name: 'Mover', tools: ['hands', 'grapple', 'push', 'teleport', 'magnet', 'antigrav', 'balloon', 'thruster', 'bat', 'spawner'] },
  { name: 'Mad Scientist', tools: ['hands', 'blackhole', 'freeze', 'antigrav', 'grow', 'shrink', 'lightning', 'clone', 'teleport', 'paint'] },
  { name: 'Miner', tools: ['hands', 'drill', 'blocks', 'grapple', 'tnt', 'rocket', 'teleport', 'spawner', 'freeze', 'push'] },
];
