"use client";

import { useState, useEffect } from "react";
import { getFlights } from "@/lib/api";
import type { Flight } from "@/types/flight";
import FlightCard from "@/components/flightcard";
import Pagination from "@/components/pagination";

export default function HomePage() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchFlights(p: number) {
    setLoading(true);
    try {
      const data = await getFlights(p);
      setFlights(data.content);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFlights(page);
  }, [page]);

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Flights</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} />
          ))}
        </div>
      )}

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </main>
  );
}
