import { CommonCommand } from "./classes";
import { CommandName, commandsNames, commandsProps } from "./props";

export const commandFactory = (commandName: CommandName) => {
    return new CommonCommand(commandsProps[commandName]);
}

export interface CommandsMap {
    [key: string]: CommonCommand;
}

export const buildCommands = () => {
    const commands: CommandsMap = {};
    commandsNames.forEach((commandName) => {
        commands[commandName] = commandFactory(commandName);
        const aliases = commands[commandName].aliases;
        aliases.forEach((alias) => {
            commands[alias] = commands[commandName];
        });
    });
    return commands;
}
