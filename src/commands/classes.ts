import { CommandProps } from "./props";

class Command {
    public name: string;
    public aliases: string[];
    private initFunction: () => void;

    constructor(props: CommandProps) {
        this.name = props.name;
        this.aliases = props.aliases;
        this.initFunction = props.init;
    }

    public init(): void {
        this.initFunction();
    }
}

export class CommonCommand extends Command {
    constructor(props: CommandProps) {
        super(props);
    }

    private static commonCommandOutput  () {
        console.log('Common command is called');
    };

    init() {
        CommonCommand.commonCommandOutput();
        super.init();
    }
}