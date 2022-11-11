class HotelSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :image, :bedroom, :livingroom, :kitchen, :sleeps, :price
end
