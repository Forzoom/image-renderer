import { isUndef, isArray } from './utils';
import { GenerateOptions } from 'types/index';
import { BasePart } from './parts/base';
import { Part } from 'types';
export { TextPart } from './parts/text';
export { ImagePart } from './parts/image';
export { RectPart } from './parts/rect';
export { LinearGradientPart } from './parts/linearGradient';
export { Size, Point, Rect } from './struct';

export {
    BasePart,
};

export class Renderer {
    public parts: Array<Part | Part[]> = [];
    public options: GenerateOptions | null = null;

    public draw(part: Part | Part[]) {
        this.parts.push(part);
    }
    public reset() {
        this.parts = [];
    }

    public getOptions(options: Partial<GenerateOptions>): GenerateOptions {
        return {
            createCanvas: options && options.createCanvas ? options.createCanvas : document.createElement.bind(document, 'canvas') as () => HTMLCanvasElement,
            createImage: options && options.createImage ? options.createImage : document.createElement.bind(document, 'img') as () => HTMLImageElement,
            width: options && options.width ? options.width : 300,
            height: options && options.height ? options.height : 300,
        };
    }

    public async generate(options: Partial<GenerateOptions>): Promise<HTMLCanvasElement | false> {
        this.options = this.getOptions(options);
        const canvasElm = this.options.createCanvas!();
        canvasElm.width = this.options.width!;
        canvasElm.height = this.options.height!;

        const ctx = canvasElm.getContext('2d');

        if (!ctx) {
            return false;
        }
        for (const part of this.parts) {
            const parts = isArray(part) ? part : [part];
            for (let i = 0, len = parts.length; i < len; i++) {
                const part = parts[i];
                part.renderer = this;
                ctx.save();
                if (!isUndef(part.alpha)) {
                    ctx.globalAlpha = part.alpha;
                }
                if (part.filter) {
                    // image.style.filter = 'blur(20px)';
                    ctx.filter = 'blur(20px)';
                }
                await part.drawCanvas(ctx);
                ctx.restore();
            }
        }
        return canvasElm;
    }

    public async generateSrc(options: Partial<GenerateOptions>): Promise<string | false> {
        options = this.getOptions(options);
        const canvasElm = await this.generate(options);
        if (!canvasElm) {
            return false;
        }
        return canvasElm.toDataURL();
    }

    public async generateImage(options: Partial<GenerateOptions>): Promise<HTMLImageElement | false> {
        const src = await this.generateSrc(options);
        if (!src) {
            return false;
        }
        const imageElm = options.createImage!();
        imageElm.src = src;
        return imageElm;
    }
}
