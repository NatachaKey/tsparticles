import type { IConnectLinks } from "../../../Interfaces/Interactivity/Modes/IConnectLinks";
import type { RecursivePartial } from "../../../../Types";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

export class ConnectLinks implements IConnectLinks, IOptionLoader<IConnectLinks> {
    public opacity;

    constructor() {
        this.opacity = 0.5;
    }

    public load(data?: RecursivePartial<IConnectLinks>): void {
        if (!(data !== undefined && data.opacity !== undefined)) {
            return;
        }

        this.opacity = data.opacity;
    }
}
