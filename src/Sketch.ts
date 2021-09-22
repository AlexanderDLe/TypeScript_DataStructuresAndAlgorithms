function parse(str: string): string {
    let arr = str.split('.');
    return `${arr[0]}_${Date.now()}.${arr[1]}`;
}

export default () => {
    let str = 'SD Dark.png';
    console.log(parse(str));
};
