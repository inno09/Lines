class AuthorsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
    def index 
        render json: Author.all, status: :ok
    end
    private
    def response_not_found
        render json: {error: "Author not found"}, status: :not_found
    end
end
