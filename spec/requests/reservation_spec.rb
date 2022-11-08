require 'rails_helper'

RSpec.describe 'Hotels API', type: :request do
  before :each do
    @user1 = User.create!({username: "user1"})
    @hotel1 = Hotel.create!({ name: "Standard Double Room", image: "standard_double_room.png", bedroom: "1 double bed", livingroom: false, kitchen: false, sleeps: 2, price: 600})
    @hotel2 = Hotel.create!({ name: "Single Room", image: "single_room.png", bedroom: "1 single bed", livingroom: false, kitchen: false, sleeps: 1, price: 300})
    @reservation = Reservation.create!({user_id: @user1.id, hotel_id: @hotel1.id, city: "New York", date: "2022-08-02"})
  end
  describe 'GET api/v1/reservations#index' do
    before(:example) { get "/api/v1/users/1/reservations" }

    it 'works! (checked http status)' do
      expect(response).to have_http_status(200)
    end

    it 'result contains number of data displayed' do
      expect(JSON.parse(response.body).size).to eq(2)
    end

    it 'page contains the correct text' do
      get api_v1_user_reservations_path(@user1)
      expect(response.body).to include('Standard Double Room')
    end
  end

  describe 'Post api/v1/reservations#create' do
    before(:example) { post api_v1_user_hotel_reservations_path(@user1, @hotel2), params: {reservation: {city: "London", date: "2022-09-12"} }}

    it 'works! (checked http status)' do
      expect(response).to have_http_status(200)
    end

    it 'result contains number of data displayed' do
      expect(JSON.parse(response.body).size).to eq(2)
    end

    it 'page contains the correct text' do
      expect(response.body).to include('Single Room')
    end
    
  end
end