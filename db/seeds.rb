users = User.create!([
  {username: "user1"},
  {username: "user2"}
])

hotels = Hotel.create!([
  { name: "Standard Double Room", 
    image: "https://images.unsplash.com/photo-1528266542126-d64713949918?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80", 
    bedroom: "1 double bed", livingroom: false, kitchen: false, sleeps: 2, price: 600},
  { name: "Single Room", 
    image: "https://images.unsplash.com/photo-1556715371-bdb0d523c870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
    bedroom: "1 single bed", livingroom: false, kitchen: false, sleeps: 1, price: 300},
  { name: "Premium Room", 
    image: "https://images.unsplash.com/photo-1563803835717-ad490b168c33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
     bedroom: "1 double bed", livingroom: true, kitchen: false, sleeps: 3, price: 800},
  { name: "Deluxe Room", 
    image: "https://images.unsplash.com/photo-1666099278999-1c39e79bb164?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    bedroom: "1 double bed", livingroom: true, kitchen: false, sleeps: 2, price: 500},
  { name: "Family Room", 
    image: "https://images.unsplash.com/photo-1654815780417-255f9c7e71f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80", 
    bedroom: "1 large double bed", livingroom: true, kitchen: true, sleeps: 4, price: 1000}
])

# https://images.unsplash.com/photo-1650819542363-9742ff02c9c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80
# https://images.unsplash.com/photo-1598825597488-259d49a54668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80

reserve = Reservation.create!([
  { user_id: 1, hotel_id: 1, city: "New York", date: "2021-10-27"},
  { user_id: 1, hotel_id: 2, city: "Toronto", date: "2021-10-27"},
  { user_id: 2, hotel_id: 3, city: "Montreal", date: "2021-10-27"}
])

puts "Created #{hotels.count} hotels"
puts "Created #{users.count} users"
puts "Created #{reserve.count} reservations"