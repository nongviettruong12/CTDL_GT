function hasPath(maze, start, destination) {
    const rows = maze.length , cols = maze[0].lenght;
    const directions = [[0, 1],[1, 0], [0, -1], [-1, 0]]
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    
    const dfs = (x, y) => {
        if(visited[x][y]) return false
        if(x === destination[0] && y === destination[1]) return true
        
        visited[x][y] = true

        for(const [dx, dy] of directions) {
            let nx = x , ny = y

            while (
                nx + nx >= 0 && nx + dx < rows &&
                ny + dy >= 0 && ny + dy < cols &&
                maze[nx + dx][ny + dy] === 0
            ) {
                nx += dx
                ny += dy
            }

            if(dfs(nx, ny)) return true
        }
        return false
    }
    return dfs(start[0], start[1])
}