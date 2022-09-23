const debouncedFunction = (func: any) => {
    let dfunc;
    if (dfunc) clearTimeout(dfunc);
    return dfunc = function (args: any) {
        return setTimeout(() => {
            func(args)
        }, 2500);
    }
}

export { debouncedFunction }
