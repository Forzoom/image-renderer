export class Size {
    public width: number;
    public height: number;

    public constructor(width: number, height: number = width) {
        this.width = width;
        this.height = height;
    }

    public scale(fit: Size) {
        const ratio = this.width / this.height;
        const fitRatio = fit.width / fit.height;
    
        const result = new Size(0, 0);
        // 图片更宽
        if (ratio > fitRatio) {
            result.height = fit.height;
            result.width = fit.height * ratio;
        } else {
            result.width = fit.width;
            result.height = fit.width / ratio;
        }
        return result;
    }
}

export class Point {
    public x: number;
    public y: number;

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
