// Tool registry: every tool in the game, in menu order.
import { handsTool } from './grab.js';
import { gunTools } from './guns.js';
import { boomTools, updateBlackHoles } from './explosives.js';
import { rayTools } from './rays.js';
import { buildTools } from './construct.js';
import { updateProjectiles } from './common.js';

export const TOOLS = [handsTool, ...gunTools, ...boomTools, ...rayTools, ...buildTools];
export const TOOL = Object.fromEntries(TOOLS.map((t) => [t.id, t]));
export const TOOL_GROUPS = [
  ['Hands', [handsTool]], ['Weapons', gunTools], ['Explosives', boomTools], ['Rays & Forces', rayTools], ['Build', buildTools],
];
export const DEFAULT_HOTBAR = ['hands', 'blaster', 'rocket', 'tnt', 'flamer', 'blackhole', 'push', 'freeze', 'spawner', 'bat'];
export { updateBlackHoles, updateProjectiles };
