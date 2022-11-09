module Api 
  module V1
    class ReservationsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
         reservation = Reservation.where(user_id: params[:user_id])
          render json: ReservationSerializer.new(reservation, options).serialized_json
      end

      def create
        @reservation = Reservation.new()
        @reservation.user_id = params[:user_id]
        @reservation.hotel_id = params[:hotel_id]
        @reservation.city = reservation_params[:city]
        @reservation.date = reservation_params[:date]
        if @reservation.save
          render json: ReservationSerializer.new(@reservation, options).serialized_json
        else
          render json: {error: @reservation.errors.messages}, status: 422
        end
      end

      def destroy 
        reservation = Reservation.find_by(id: params[:id])
        if reservation.destroy         
          render json: {message: "Reservation deleted successfully"}
        else
          render json: {error: reservation.errors.messages}, status: 422

        end
      end

      private
           
      def reservation_params
        params.require(:reservation).permit(:city, :date)
      end

      def options 
        @options ||= { include: %i[hotel] }
      end        

      
    end
  end
end