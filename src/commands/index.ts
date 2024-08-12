
import { buildCommands } from "./facotry";

const commandsMap = buildCommands();

commandsMap['help'].init();
commandsMap['sos'].init();

console.log('------------------------');

commandsMap['example'].init();
commandsMap['demo'].init();