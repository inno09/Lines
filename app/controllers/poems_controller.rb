class PoemsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :response_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :unprocessable_entity_response

    def index 
        render json: Poem.all, status: :ok
    end

    def create
        poem = Poem.create!(
            title: params[:title], 
            content: params[:content],
            author_id: params[:author_id],
            genre_id: params[:genre_id]
        )
        render json: poem, status: :created
    end

    def update
        poem = Poem.find_by!(id: params[:id])
        poem.update(poem_params)
        render json: poem
    end
    
    def destroy 
        poem = Poem.find_by(id: params[:id])
        poem.destroy
        head :no_content
    end

    private
  
    def poem_params
      params.permit(:title, :content, :author_id, :genre_id)
    end

    def response_not_found
        render json: {error: "Poem not found"}, status: :not_found
    end
    def unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
