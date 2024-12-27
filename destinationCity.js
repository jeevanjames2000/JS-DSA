const city = [
  ["london", "new york"],
  ["new york", "lima"],
  ["lima", "sao paolo"],
];

function findDestinationCity(city) {
  const outgoing = new Set(); // Tracks cities with outgoing paths
  const allCities = new Set(); // Tracks all cities

  // Populate sets
  for (const [start, end] of city) {
    outgoing.add(start); // Add starting city to outgoing set
    allCities.add(end); // Add destination city to allCities set
  }

  // A city that is in allCities but not in outgoing is the destination
  for (const city of allCities) {
    if (!outgoing.has(city)) {
      return city; // Found the destination city
    }
  }

  return null; // If no destination city exists
}

console.log("Destination city:", findDestinationCity(city));
