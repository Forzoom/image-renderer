/**
 * 点信息
 */
export class Point {
    constructor(x: number, y: number);
    x: number;
    y: number;
}

/**
 * 尺寸信息
 */
export class Size {
    constructor(width: number, height?: number);
    width: number;
    height: number;
    scale(fit: Size): Size;
}

export interface BasePartOption {
    alpha?: number;
    filter?: boolean;
}
export class BasePart implements BasePartOption {
    type: string;
    alpha?: number;
    filter?: boolean;
    drawCanvas(ctx: CanvasRenderingContext2D): void;
}

export type Part = ImagePart | TextPart;

export class Renderer {
    new (): Renderer;
    parts: Array<Part | Part[]>;
    draw(part: Part | Part[]): void;
    reset(): void;
    getOptions(options: Partial<GenerateOptions>): GenerateOptions;
    generate(options: Partial<GenerateOptions>): Promise<HTMLCanvasElement | false>;
    generateSrc(options: Partial<GenerateOptions>): Promise<string | false>;
    generateImage(options: Partial<GenerateOptions>): Promise<HTMLImageElement | false>;
}

/**
 * 文本
 */
export interface TextPartOptions extends BasePartOption {
    value?: string | string[];
    origin: Point;
    /** 将自动折行 */
    width?: number;
    fontSize?: number;
    /** 需要手动指定行高 */
    lineHeight?: number;
    singleLine?: boolean;
    color?: string;
    font?: string;
    textAlign?: 'left' | 'center' | 'right';
    orientation?: 'horizontal' | 'vertical';
}
export class TextPart extends BasePart implements TextPartOptions {
    type: 'text';
    value?: string | string[];
    origin: Point;
    /** 将自动折行 */
    width?: number;
    fontSize?: number;
    /** 需要手动指定行高 */
    lineHeight?: number;
    singleLine?: boolean;
    color?: string;
    font?: string;
    textAlign?: 'left' | 'center' | 'right';
    orientation?: 'horizontal' | 'vertical';
    constructor(options?: Partial<TextPartOptions>);
}

export interface LinearGradientPartOptions extends BasePartOption {
    stop: Array<{ pos: number; color: string }>;
    start: { x: number; y: number };
    end: { x: number; y: number };
    rect: { x: number; y: number; width: number; height: number };
}
export class LinearGradientPart extends BasePart implements LinearGradientPartOptions {
    stop: Array<{ pos: number; color: string }>;
    start: { x: number; y: number };
    end: { x: number; y: number };
    rect: { x: number; y: number; width: number; height: number };
    constructor(options?: Partial<LinearGradientPartOptions>);
}

export interface RectPartOptions extends BasePartOption {
    backgroundColor: string;
    origin: Point;
    size: Size;
}
export class RectPart extends BasePart implements RectPartOptions {
    backgroundColor: string;
    origin: Point;
    size: Size;
    constructor(options?: Partial<RectPartOptions>);
}

export interface ImagePartOptions extends BasePartOption {
    value?: string | HTMLImageElement | HTMLCanvasElement | null;
    origin: Point;
    size: Size;
}
export class ImagePart extends BasePart implements ImagePartOptions {
    type: 'image';
    value?: string | HTMLImageElement | HTMLCanvasElement | null;
    origin: Point;
    size: Size;
    constructor(options?: Partial<ImagePartOptions>);
}

type CanvasCreator = () => HTMLCanvasElement;
type ImageCreator = () => HTMLImageElement;
export interface GenerateOptions {
    createCanvas: CanvasCreator;
    createImage: ImageCreator;
    width: number;
    height: number;
}
