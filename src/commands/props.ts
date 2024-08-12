export interface CommandProps {
    name: string;
    aliases: string[];
    init: () => void;
}

export const commandsNames = ['help', 'example'] as const;

export type CommandName = typeof commandsNames[number];

export const commandsProps: Record<CommandName, CommandProps> = {
    help: {
        name: 'help',
        aliases: ['sos', 'issue'],
        init: function () {
            console.log('Command "help" is called');
        },
    },
    example: {
        name: 'example',
        aliases: ['demo', 'test'],
        init: function () {
            console.log('Command "example" is called');
        },
    },
} as const;
