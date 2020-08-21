import type { RecursivePartial } from "../../../../Types";
import type { ISizeRandom } from "../../../Interfaces/Particles/Size/ISizeRandom";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";

export class SizeRandom implements ISizeRandom, IOptionLoader<ISizeRandom> {
    public enable;
    public minimumValue;

    constructor() {
        this.enable = false;
        this.minimumValue = 1;
    }

    public load(data?: RecursivePartial<ISizeRandom> | undefined): void {
        if (data === undefined) {
            return;
        }

        if (data.enable !== undefined) {
            this.enable = data.enable;
        }

        if (data.minimumValue !== undefined) {
            this.minimumValue = data.minimumValue;
        }
    }
}
