class Api::ReviewsController < ApplicationController
    def index
        if params.has_key?(:user_id)
            @reviews = Review.where(author_id: params[:user_id])
        
        elsif params.has_key?(:product_id)
            @reviews = Review.where(product_id: params[:product_id])
            # @average_rating = @reviews.map{|review| review.rating}.sum/@reviews.length
        else
            @reviews = Review.all
        end
    end

    def show
        @review = Review.find(params[:id])
        render :show
    end

    def create
        @review = Review.create(review_params)
        @review.author_id = current_user.id
        if @review.save && @review.rating
            render :show
        else
            render json: ['Make sure to select stars for rating'], status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy
            render :show
        else
            render json: ['Cannot find the specified review'], status: 404
        end
    end

    private
    def review_params
        params.require(:review).permit(:body, :rating, :author_id, :business_id)
    end
end
