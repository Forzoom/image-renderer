import { BasePart } from './part';
import { RectPartOptions } from '../../types';
import { Point, Size } from '../struct';

export const defaultOptions: RectPartOptions = {
    backgroundColor: '000000',
    origin: new Point(0, 0),
    size: new Size(0, 0),
};

export class RectPart extends BasePart implements RectPartOptions {
    public readonly type = 'rect';
    public backgroundColor: string;
    public origin: Point;
    public size: Size;

    public constructor(options?: Partial<RectPartOptions>) {
        super(options || {});
        const opt = Object.assign({}, defaultOptions, options);
        this.backgroundColor = opt.backgroundColor;
        this.origin = opt.origin;
        this.size = opt.size;
    }

    /**
     * 在canvas上绘图
     */
    public async drawCanvas(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#' + this.backgroundColor;
        ctx.fillRect(this.origin.x, this.origin.y, this.size.width, this.size.height);
    }
}
