class GenresController < ApplicationController
    def index 
        render json: Genre.all, status: :ok
    end
    private
    
end
