import type { Flight } from "@/types/flight";

interface FlightCardProps {
  flight: Flight;
}

export default function FlightCard({ flight }: FlightCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 shadow p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">Flight #{flight.number}</h2>
      <p className="text-gray-700">
        Origin: {flight.origin.name} ({flight.origin.name}) - {flight.origin.city}
      </p>
      <p className="text-gray-700">
        Destination: {flight.destination.name} ({flight.destination.name}) - {flight.destination.city}
      </p>
    </div>
  );
}