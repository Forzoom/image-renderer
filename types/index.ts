import { ImagePart } from '../src/parts/image';
import { TextPart } from '../src/parts/text';
import { RectPart } from '../src/parts/rect';
import { LinearGradientPart } from '../src/parts/linearGradient';
import { Point, Size } from '../src/struct';

export type Part = TextPart | ImagePart | RectPart | LinearGradientPart;

export interface PartOption {
    alpha?: number;
    filter?: boolean;
}

export interface TextPartOptions extends PartOption {
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
export interface LinearGradientPartOptions extends PartOption {
    stop: Array<{ pos: number; color: string }>;
    start: { x: number; y: number };
    end: { x: number; y: number };
    rect: { x: number; y: number; width: number; height: number };
}
export interface RectPartOptions extends PartOption {
    backgroundColor: string;
    origin: Point;
    size: Size;
}
export interface ImagePartOptions extends PartOption {
    value?: string | HTMLImageElement | HTMLCanvasElement | null;
    origin: Point;
    size: Size;
}
export interface GenerateOptions {
    createCanvas?: () => HTMLCanvasElement;
    createImage?: () => HTMLImageElement;
    width?: number;
    height?: number;
}
