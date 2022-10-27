module Api 
  module V1
    class ReservationsController < ApplicationController
      protect_from_forgery with: :null_session
      def index
         reservation = Reservation.where(user_id: params[:user_id])
          render json: ReservationSerializer.new(reservation, options).serialized_json
      end

      def create
        reservation = Reservation.new(user_id: params[:user_id], hotel_id: params[:hotel_id])
        if reservation.save
          render json: ReservationSerializer.new(reservation, options).serialized_json
        else
          render json: {error: reservation.errors.messages}, status: 422
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
           
      # def reservation_params
      #   params.require(:reservation).permit(user_id: params[:user_id], hotel_id: params[:hotel_id])
      # end


      def options 
        @options ||= { include: %i[hotel] }
      end        

      
    end
  end
end