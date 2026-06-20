export const enqueue = (queue, item) => [...queue, item];
export const dequeue = (queue) => queue.slice(1);
export const removeFromQueue = (queue, id) => queue.filter((item) => item.id !== id);
