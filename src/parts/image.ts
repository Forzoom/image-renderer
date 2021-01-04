import { BasePart } from './part';
import { ImagePartOptions } from '../../types';
import { isString, isUndef, loadImage } from '../utils';
import { Point, Size } from '../struct';

export const defaultOptions: ImagePartOptions = {
    value: '',
    origin: new Point(0, 0),
    size: new Size(0, 0),
};

export class ImagePart extends BasePart implements ImagePartOptions {
    public readonly type = 'image';
    public value?: string | HTMLImageElement | HTMLCanvasElement | null;
    public origin: Point;
    public size: Size;

    public constructor(options?: Partial<ImagePartOptions>) {
        super(options || {});
        const opt = Object.assign({}, defaultOptions, options);
        this.value = opt.value;
        this.origin = opt.origin;
        this.size = opt.size;
    }

    /**
     * 在canvas上绘图
     */
    public async drawCanvas(ctx: CanvasRenderingContext2D) {
        if (isUndef(this.value)) {
            return;
        }
        let elm: HTMLImageElement | HTMLCanvasElement | null = null;
        if (isString(this.value)) {
            elm = await loadImage(this.value, true);
        } else {
            elm = this.value;
        }
        ctx.drawImage(elm, this.origin.x, this.origin.y, this.size.width, this.size.height);
    }

    public circleClip(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.moveTo(this.origin.x + this.size.width, this.origin.y + this.size.height / 2);
        ctx.arc(this.origin.x + this.size.width / 2, this.origin.y + this.size.height / 2, this.size.width / 2, 0, Math.PI * 2, true);
        ctx.clip();
        ctx.closePath();
    }
}
