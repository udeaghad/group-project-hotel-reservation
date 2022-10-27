users = User.create!([
  {username: "user1"},
  {username: "user2"}
])

hotels = Hotel.create!([
  { name: "Standard Double Room", image: "standard_double_room.png", bedroom: "1 double bed", livingroom: false, kitchen: false, sleeps: 2, price: 600},
  { name: "Single Room", image: "single_room.png", bedroom: "1 single bed", livingroom: false, kitchen: false, sleeps: 1, price: 300},
  { name: "Premium Room", image: "premium_room.png", bedroom: "1 double bed", livingroom: true, kitchen: false, sleeps: 3, price: 800},
  { name: "Deluxe Room", image: "deluxe_room.png", bedroom: "1 double bed", livingroom: true, kitchen: false, sleeps: 2, price: 500},
  { name: "Family Room", image: "family_room.png", bedroom: "1 large double bed", livingroom: true, kitchen: true, sleeps: 4, price: 1000}
])

reserve = Reservation.create!([
  { user_id: 1, hotel_id: 1, city: "New York", date: "2021-10-27"},
  { user_id: 1, hotel_id: 2, city: "Toronto", date: "2021-10-27"},
  { user_id: 2, hotel_id: 3, city: "Montreal", date: "2021-10-27"}
])

puts "Created #{hotels.count} hotels"
puts "Created #{users.count} users"
puts "Created #{reserve.count} reservations"