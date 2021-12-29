/**
 *  42. Trapping Rain Water
 */
const trapA = (height: number[]): number => {
    let waterAccumulation = 0;
    let maxHeight = 0;

    for (let num of height) maxHeight = Math.max(maxHeight, num);
    
    for (let currHeight = 1; currHeight <= maxHeight; currHeight++) {
        let isWalled = false;
        let water = 0;

        for (let i = 0; i < height.length; i++) {
            let isBlack = height[i] >= currHeight;

            if (isBlack) {
                if (water > 0) waterAccumulation += water;
                water = 0;
                isWalled = true;
            } else {
                if (isWalled) water++;
            }
        }
    }

    return waterAccumulation;
};

const trapZ = (height: number[]): number => {
    if (height === null || height.length === 0) return 0;

    let L = 0;
    let R = height.length - 1;

    let LMax = 0;
    let RMax = 0;

    let res = 0;

    while (L < R) {
        console.log(`L: ${L}, R: ${R}`)
        console.log(`height[L]: ${height[L]}, height[R]: ${height[R]}`)
        console.log(`Before: LMax: ${LMax}, RMax: ${RMax}`)
        
        LMax = Math.max(LMax, height[L]);        
        if (height[L] < LMax) {
            res += LMax - height[L];
        }
        
        RMax = Math.max(RMax, height[R]);
        if (height[R] < RMax) {
            res += RMax - height[R];
        }

        console.log(`After: LMax: ${LMax}, RMax: ${RMax}`)
        
        height[L] < height[R] ? L++ : R--;
        console.log(res)
        console.log('\n')
    }

    return res;
}


const trap = (height: number[]): number => {
    let len = height.length;
    if (len < 3) return 0;

    let L = 1;
    let R = len - 2;

    let LMax = height[0];
    let RMax = height[len - 1];

    let res = 0;

    while (L < R) {
        if (LMax < RMax) {
            if (height[L] >= LMax) {
                LMax = height[L];
            } else {
                res += LMax - height[L];
            }
            L++;
        } else {
            if (height[R] >= RMax) {
                RMax = height[R];
            } else {
                res += RMax - height[R];
            }
            R--;
        }
    }

    return res;
}

export default () => {
    const height = [0,1,0,2,1,0,1,3,2,1,2,1]
    console.log(trap(height));
};
