import type { FlightSearchResponse } from "@/types/flight";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function getFlights(page = 0): Promise<FlightSearchResponse> {
  const res = await fetch(`${API_URL}/api/flights/search?page=${page}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch flights");
  return res.json();
}