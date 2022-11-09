module Api
  module V1
    class UsersController < ApplicationController
      protect_from_forgery with: :null_session

      def show
        user = User.find_by(username: params[:id].capitalize)
        render json: UserSerializer.new(user).serialized_json
      end

      def create
        user = User.new(user_params)
        user.username = user.username.capitalize
        if user.save
          render json: UserSerializer.new(user).serialized_json
        else
          render json: { error: user.errors.messages }, status: 422
        end
      end

      private

      def user_params
        params.require(:user).permit(:username)
      end
    end
  end
end
