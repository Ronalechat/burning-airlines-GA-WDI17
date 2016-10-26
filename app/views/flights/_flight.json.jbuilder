json.extract! flight, :id, :date, :flight_num, :origin, :destination, :airplane_id, :created_at, :updated_at
json.url flight_url(flight, format: :json)
json.airplane flight.airplane
