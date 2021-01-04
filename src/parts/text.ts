import { BasePart } from './part';
import { TextPartOptions } from '../../types';
import { isString, isUndef, binarySearch } from '../utils';
import { Point } from '../struct';

export const defaultOptions: TextPartOptions = {
    origin: new Point(0, 0),
    fontSize: 14,
    singleLine: false,
    color: '000000',
    textAlign: 'left',
    orientation: 'horizontal',
};

export class TextPart extends BasePart implements TextPartOptions {
    public readonly type = 'text';
    public value?: string | string[];
    public origin: Point;
    /** 将自动折行 */
    public width: number;
    public fontSize: number;
    /** 需要手动指定行高 */
    public lineHeight: number;
    public singleLine?: boolean;
    public color?: string;
    public font?: string;
    public textAlign: 'left' | 'center' | 'right';
    public orientation?: 'horizontal' | 'vertical';

    public constructor(options?: Partial<TextPartOptions>) {
        super(options || {});
        const opt = Object.assign({}, defaultOptions, options);
        this.value = opt.value;
        this.origin = opt.origin;
        /** 将自动折行 */
        this.width = opt.width!;
        this.fontSize = opt.fontSize!;
        /** 需要手动指定行高 */
        this.lineHeight = isUndef(opt.lineHeight) ? Math.round(opt.fontSize! * 1.5) : opt.lineHeight;
        this.singleLine = opt.singleLine;
        this.color = opt.color;
        this.font = opt.font;
        this.textAlign = opt.textAlign!;
        this.orientation = opt.orientation;
    }

    /**
     * 在canvas上绘图
     */
    public async drawCanvas(ctx: CanvasRenderingContext2D) {
        if (isUndef(this.value) || this.value === '' || this.value.length === 0) {
            return;
        }
        ctx.fillStyle = '#' + this.color;
        if (this.font) {
            ctx.font = this.font;
        }
        ctx.textAlign = this.textAlign;

        // 对于宽度有限制要求
        if (this.orientation === 'vertical') {
            let list: string[] = [];
            if (isString(this.value)) {
                list = this.value.split('');
            }
            for (let i = 0, len = list.length; i < len; i++) {
                ctx.fillText(list[i], this.origin.x, this.origin.y + i * this.lineHeight);
            }
        } else {
            if (this.width && this.lineHeight) {
                const result = await binarySearch(ctx, this.value as string, this.width);
    
                if (!this.singleLine) {
                    for (let i = 0, len = result.length; i < len; i++) {
                        ctx.fillText(result[i], this.origin.x, this.origin.y + i * this.lineHeight);
                    }
                } else {
                    const str = result.length > 1 ? result[0].substr(0, result[0].length - 1) + '..' : result[0];
                    ctx.fillText(str, this.origin.x, this.origin.y);
                }
            } else {
                ctx.fillText(this.value as string, this.origin.x, this.origin.y);
            }
        }
    }
}
