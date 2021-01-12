import { isUndef } from "@/utils";
import { BasePartOption, Renderer } from "../../types";

export const defaultOptions: BasePartOption = {
    filter: undefined,
    alpha: 1,
} as const;

export abstract class BasePart {
    /** 渲染器，在渲染前将配置 */
    public renderer: Renderer | null = null;
    public key?: string;
    public alpha?: number;
    public filter?: boolean;

    public constructor(options: Partial<BasePartOption>) {
        const opt = Object.assign({}, defaultOptions, options);
        this.alpha = opt.alpha;
        this.filter = opt.filter;
        this.key = opt.key;
    }

    public drawCanvas(ctx: CanvasRenderingContext2D): Promise<void> | void {
        if (!isUndef(this.alpha)) {
            ctx.globalAlpha = this.alpha;
        }
        if (this.filter) {
            // image.style.filter = 'blur(20px)';
            ctx.filter = 'blur(20px)';
        }
    };
}
