const debouncedFunction = (func: any, delay = 1000) => {
    let timeout: any;
    return function (...args: any) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(args)
        }, delay);
    }
}

export { debouncedFunction }
