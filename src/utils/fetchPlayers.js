export async function fetchPlayers() {
    try {
        const response = await fetch("/players.json");
        if (!response.ok) throw new Error("Failed to load players data.");

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching players data:", error);
        return [];
    }
}
