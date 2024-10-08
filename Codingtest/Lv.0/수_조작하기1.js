const controller = {
    w: (n) => n + 1,
    s: (n) => n - 1,
    d: (n) => n + 10,
    a: (n) => n - 10,
};

function solution(n, control) {
    return [...control].reduce((acc, curr) => {
        return controller[curr](acc);
    }, n);
}

function solution(n, control) {
    for (let i = 0; i < control.length; i++) {
        switch (control[i]) {
            case "w":
                n++;
                break;
            case "s":
                n--;
                break;
            case "d":
                n += 10;
                break;
            case "a":
                n -= 10;
                break;
        }
    }
    return n;
}
