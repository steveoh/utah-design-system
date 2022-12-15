export default function groupElementsByHeaderLevel(headers) {
  // console.warn('Need to jest unit test: groupElementsByHeaderLevel');
  if (!headers?.length) {
    return [];
  }

  const nodesHierarchy = [];
  const nodesHierarchyStack = [{ children: nodesHierarchy, level: -1 }];

  for (let headersIndex = 0; headersIndex < headers.length; headersIndex += 1) {
    const currentHeader = headers[headersIndex];

    const newNode = { node: currentHeader, children: [], level: Number(currentHeader.tagName.substring(1)) };
    const parentNode = nodesHierarchyStack[nodesHierarchyStack.length - 1];

    if (parentNode.level !== -1 && Math.abs(newNode.level - parentNode.level) > 1) {
      // eslint-disable-next-line no-console
      console.error('header chaining skips a level!', { newNode, parentNode });
    }

    if (newNode.level === parentNode.level) {
      // sibling of last node so pop last node from parent stack and create a new parent as this node
      nodesHierarchyStack.pop();
      nodesHierarchyStack[nodesHierarchyStack.length - 1].children.push(newNode);
    } else if (newNode.level > parentNode.level) {
      // child of previous node
      parentNode.children.push(newNode);
    } else if (newNode.level < parentNode.level) {
      // going back up a level (multi-level hop is possible if adding more than just h2/h3)
      while (nodesHierarchyStack[nodesHierarchyStack.length - 1].level >= newNode.level) {
        nodesHierarchyStack.pop();
      }
      nodesHierarchyStack[nodesHierarchyStack.length - 1].children.push(newNode);
    }

    // the newNode is the new potential parent for the next node
    nodesHierarchyStack.push(newNode);
  }

  return nodesHierarchy;
}