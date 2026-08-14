const API_URL = "http://localhost:8080/api/properties";

export async function getProperties() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error(
      "Impossible de récupérer les propriétés."
    );
  }

  return response.json();
}
export async function getPropertyById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Impossible de récupérer le logement.");
  }

  return response.json();
}