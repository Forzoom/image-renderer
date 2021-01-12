/**
 * 点信息
 */
export class Point {
    constructor(x: number, y: number);
    x: number;
    y: number;
    scale(ratio: number): Point;
}

/**
 * 尺寸信息
 */
export class Size {
    constructor(width: number, height?: number);
    width: number;
    height: number;
    scaleMode(mode: 'fill' | 'fit', fit: Size): Size;
    scale(ratio: number): Size;
}

/**
 * 点信息
 */
export class Rect {
    constructor(origin: Point, size: Size);
    origin: Point;
    size: Size;
    scale(ratio: number): Rect;
}

export interface BasePartOption {
    key?: string;
    alpha?: number;
    filter?: boolean;
}
export class BasePart implements BasePartOption {
    /** 渲染器，在渲染前将配置 */
    renderer: Renderer | null;
    key?: string;
    type: string;
    alpha?: number;
    filter?: boolean;
    drawCanvas(ctx: CanvasRenderingContext2D): Promise<void> | void;
}

export type Part = ImagePart | TextPart;

export class Renderer {
    parts: Array<Part | Part[]>;
    options: GenerateOptions | null;
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
    /** 字号大小 */
    fontSize?: number;
    /** 需要手动指定行高 */
    lineHeight?: number;
    singleLine?: boolean;
    color?: string;
    /** 使用字体 */
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
    /** 绘制原点 */
    origin: Point;
    /** 绘制大小 */
    size: Size;
    /** 裁切 */
    clip?: Rect;
}
export class ImagePart extends BasePart implements ImagePartOptions {
    type: 'image';
    value?: string | HTMLImageElement | HTMLCanvasElement | null;
    origin: Point;
    size: Size;
    clip?: Rect;
    constructor(options?: Partial<ImagePartOptions>);
}

type CanvasCreator = () => HTMLCanvasElement;
type ImageCreator = () => HTMLImageElement;
export interface GenerateOptions {
    createCanvas: CanvasCreator;
    createImage: ImageCreator;
    width: number;
    height: number;
    beforeDraw: (ctx: CanvasRenderingContext2D, part: BasePart) => void;
    afterDraw: (ctx: CanvasRenderingContext2D, part: BasePart) => void;
}
