export class Size {
    public width: number;
    public height: number;

    public constructor(width: number, height: number = width) {
        this.width = width;
        this.height = height;
    }

    public scaleMode(mode: 'fill' | 'fit', fit: Size): Size {
        const ratio = this.width / this.height;
        const fitRatio = fit.width / fit.height;
    
        const result = new Size(0, 0);
        if (mode === 'fill') {
            // 图片更宽
            if (ratio > fitRatio) {
                result.height = fit.height;
                result.width = fit.height * ratio;
            } else {
                result.width = fit.width;
                result.height = fit.width / ratio;
            }
        } else {
            // 图片更宽
            if (ratio > fitRatio) {
                result.width = fit.width;
                result.height = fit.width / ratio;
            } else {
                result.height = fit.height;
                result.width = fit.height * ratio;
            }
        }
        return result;
    }

    public scale(ratio: number) {
        return new Size(this.width * ratio, this.height * ratio);
    }
}

export class Point {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public scale(ratio: number) {
        return new Point(this.x * ratio, this.y * ratio);
    }
}

export class Rect {
    public origin: Point;
    public size: Size;

    public constructor(origin: Point, size: Size) {
        this.origin = origin;
        this.size = size;
    }

    public scale(ratio: number) {
        return new Rect(this.origin.scale(ratio), this.size.scale(ratio));
    }
}
