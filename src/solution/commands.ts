export interface CommandProps {
    name: string;
    aliases: string[];
    init: () => void;
}

const commandsNames = ['help', 'example'] as const;

type CommandName = typeof commandsNames[number];

export const commandsProps: Record<CommandName,CommandProps> = {
    help: {
        name: 'help',
        aliases: ['sos', 'issue'],
        init: function () {
            // commonCommandOutput();
            console.log('Command "help" is called');
        },
    },
    example: {
        name: 'example',
        aliases: ['demo', 'test'],
        init: function () {
            // commonCommandOutput();
            console.log('Command "example" is called');
        },
    },
} as const;


class Command {
    name: string;
    aliases: string[];
    init: () => void;

    constructor(props: CommandProps) {
        this.name = props.name;
        this.aliases = props.aliases;
        this.init = props.init;
    }
}

export const commandFactory = (commandName: CommandName) => {
    return new Command(commandsProps[commandName]);
}

export interface CommandsMap{
    [key: string]: Command;
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
