/**
 * 是否是null或者undefined
 *
 * @param {} v 参数
 *
 * @return {boolean}
 */
export function isUndef(v: any): v is (null | undefined) {
    return v === null || v === undefined;
}

/**
 * 是否是某种类型
 */
export function isType<T>(name: string) {
    return (val: any): val is T => {
        return Object.prototype.toString.call(val) === `[object ${name}]`;
    };
}

export const isString = isType<string>('String');
export const isArray: <T = any>(val: any) => val is T[] = Array.isArray || isType('Array');

/**
 * 加载图片
 */
export function loadImage(src: string, anonymous?: boolean) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        if (anonymous) {
            image.setAttribute('crossOrigin', 'anonymous');
        }
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (e) => {
            console.error('loadImage fail', src, e);
            reject(e);
        };
        image.src = src;
    });
}

export async function binarySearch(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): Promise<string[]> {
    const result: string[] = [];

    while (text.length > 0) {
        const metrics = ctx.measureText(text);
        // 如果宽度较小
        if (metrics.width <= maxWidth) {
            result.push(text);
            break;
        }

        // 宽度较大
        const str = text;
        let left = 0;
        let right: number = str.length - 1;
        let anchor: number = Math.floor((right + left) / 2);
        let _maxWidth = maxWidth;
        while ((right - left) > 1) {
            const width = ctx.measureText(str.substring(left, anchor)).width;
            if (width > _maxWidth) {
                right = anchor;
                anchor = Math.floor((right + left) / 2);
            } else {
                left = anchor;
                anchor = Math.floor((right + left) / 2);
                _maxWidth -= width;
            }
        }

        result.push(text.substr(0, anchor));
        text = text.substr(anchor);
    }

    return result;
}
