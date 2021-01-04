import { BasePart } from './part';
import { LinearGradientPartOptions } from '../../types';
import { Point } from '../struct';

export const defaultOptions: LinearGradientPartOptions = {
    stop: [],
    start: new Point(0, 0),
    end: new Point(0, 0),
    rect: { x: 0, y: 0, width: 0, height: 0 },
};

export class LinearGradientPart extends BasePart implements LinearGradientPartOptions {
    public readonly type = 'linearGradient';
    public stop: Array<{ pos: number; color: string }>;
    public start: { x: number; y: number };
    public end: { x: number; y: number };
    public rect: { x: number; y: number; width: number; height: number };

    public constructor(options?: Partial<LinearGradientPartOptions>) {
        super(options || {});
        const opt = Object.assign({}, defaultOptions, options);
        this.stop = opt.stop;
        this.start = opt.start;
        this.end = opt.end;
        this.rect = opt.rect;
    }

    /**
     * 在canvas上绘图
     */
    public async drawCanvas(ctx: CanvasRenderingContext2D) {
        const gradient = ctx.createLinearGradient(this.start.x, this.start.y, this.end.x, this.end.y);
        for (const stop of this.stop) {
            gradient.addColorStop(stop.pos, stop.color);
        }
        ctx.fillStyle = gradient;
        ctx.fillRect(this.rect.x, this.rect.y, this.rect.width, this.rect.height);
    }
}
