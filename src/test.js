console.log('random');

const graph = {
    a: ['b','c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

dfs(graph, 'a');

function dfs(graph, source) {
    let stack = [source];

    while(stack.length >0) {
        const curr_value = stack.pop();
        stack = [...stack, ...graph[curr_value]];
        console.log(curr_value);
    }
}
