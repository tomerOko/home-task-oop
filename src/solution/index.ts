// const commands = require('./commands-legacy');

import { buildCommands } from "./commands";

// commands.buildCommands();

// commands.getCommand('help').init();
// commands.getCommand('sos').init();

// console.log('------------------------');

// commands.getCommand('example').init();
// commands.getCommand('demo').init();

const commandsMap = buildCommands();

commandsMap['help'].init();
commandsMap['sos'].init();

console.log('------------------------');

commandsMap['example'].init();
commandsMap['demo'].init();