import { isUndef, isArray } from '@/utils';
import { Part, GenerateOptions } from '@/../types/index';

/**
 * 渲染图片
 */
export async function drawParts(ctx: CanvasRenderingContext2D, parts: Part[]) {
    for (let i = 0, len = parts.length; i < len; i++) {
        const part = parts[i];
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

export class Renderer {
    public parts: Array<Part | Part[]> = [];

    public draw(part: Part | Part[]) {
        this.parts.push(part);
    }
    public reset() {
        this.parts = [];
    }

    public getOptions(options: GenerateOptions) {
        return {
            createCanvas: document.createElement.bind(document, 'canvas') as () => HTMLCanvasElement,
            createImage: document.createElement.bind(document, 'img') as () => HTMLImageElement,
            width: 300,
            height: 300,
            ...options,
        };
    }

    public async generate(options: GenerateOptions): Promise<HTMLCanvasElement | false> {
        options = this.getOptions(options);
        const canvasElm = options.createCanvas!();
        canvasElm.width = options.width!;
        canvasElm.height = options.height!;

        const ctx = canvasElm.getContext('2d');

        if (!ctx) {
            return false;
        }
        for (const part of this.parts) {
            await drawParts(ctx, isArray(part) ? part : [part]);
        }
        return canvasElm;
    }

    public async generateSrc(options: GenerateOptions): Promise<string | false> {
        options = this.getOptions(options);
        const canvasElm = await this.generate(options);
        if (!canvasElm) {
            return false;
        }
        return canvasElm.toDataURL();
    }

    public async generateImage(options: GenerateOptions): Promise<HTMLImageElement | false> {
        const src = await this.generateSrc(options);
        if (!src) {
            return false;
        }
        const imageElm = options.createImage!();
        imageElm.src = src;
        return imageElm;
    }
}
