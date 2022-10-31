module Api
  module V1
    class HotelsController < ApplicationController
      def index
        hotels = Hotel.all
        render json: HotelSerializer.new(hotels).serialized_json
      end

      def show
        hotel = Hotel.find_by(id: params[:id])
        render json: HotelSerializer.new(hotel).serialized_json
      end
    end
  end
end