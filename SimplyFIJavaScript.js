const routes = {
  'Paris': ['Skopje'],
  'Skopje': ['Paris'],
  'Zurich': ['Amsterdam'],
  'Amsterdam': ['Barcelona'],
  'Prague': ['Zurich'],
  'Barcelona': ['Berlin'],
  'Kiev': ['Prague'],
  'Berlin': ['Kiev', 'Amsterdam']
};

function findRoute(currentCity, visited, path) {
    visited[currentCity] = true;
    path.push(currentCity);
    if (path.length === Object.keys(visited).length) {
        return path;
    }

    for (let nextCity of routes[currentCity]) {
        if (!visited[nextCity]) {
            const newPath = findRoute(nextCity, visited, [...path]);
            if (newPath) {
                return newPath;
            }
        }
    }

    return null;
}


const visited = {
  'Paris': false,
  'Skopje': false,
  'Zurich': false,
  'Amsterdam': false,
  'Prague': false,
  'Barcelona': false,
  'Kiev': false,
  'Berlin': false
};

const path = findRoute('Kiev', visited, []);
console.log("The route your son traveled is: ", path.join(" -> "));