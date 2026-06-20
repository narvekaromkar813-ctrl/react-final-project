export function findShortestPath(nodes, edges, source, destination) {
  const distances = Object.fromEntries(nodes.map((node) => [node.id, Infinity]));
  const previous = {};
  const unvisited = new Set(nodes.map((node) => node.id));
  distances[source] = 0;

  while (unvisited.size) {
    const current = [...unvisited].sort((a, b) => distances[a] - distances[b])[0];
    if (!current || distances[current] === Infinity) break;
    if (current === destination) break;
    unvisited.delete(current);

    edges
      .filter(([a, b]) => a === current || b === current)
      .forEach(([a, b, weight]) => {
        const neighbor = a === current ? b : a;
        if (!unvisited.has(neighbor)) return;
        const nextDistance = distances[current] + weight;
        if (nextDistance < distances[neighbor]) {
          distances[neighbor] = nextDistance;
          previous[neighbor] = current;
        }
      });
  }

  const path = [];
  let cursor = destination;
  while (cursor) {
    path.unshift(cursor);
    cursor = previous[cursor];
  }

  return {
    path: path[0] === source ? path : [],
    time: distances[destination]
  };
}
