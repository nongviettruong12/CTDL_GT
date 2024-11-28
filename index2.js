function hanoi(n, source, target, auxiliary) {
    if(n === 1) {
        console.log(`di chuyen dia tu ${source} sang ${target}`);
        return
    }
    hanoi(n - 1, source, auxiliary, target);
    console.log(`di chuyen dia tu ${source} sang ${target}`);
    hanoi(n - 1, auxiliary, target, source)
}
const n = 3
hanoi(n, 'A', 'C', 'B')
