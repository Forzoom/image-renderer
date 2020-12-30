import { PartOption } from "../type";

export const defaultOptions: PartOption = {
    filter: undefined,
    alpha: 1,
} as const;

export abstract class Part {
    public alpha?: number;
    public filter?: boolean;

    public constructor(options: Partial<PartOption>) {
        const opt = Object.assign({}, defaultOptions, options);
        this.alpha = opt.alpha;
        this.filter = opt.filter;
    }
}
