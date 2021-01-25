
class Api::LikedItemsController < ApplicationController
    def index
        if params.has_key?(:user_id)
            @liked_items = LikedItem.where(user_id: params[:user_id])
            render :index
        else
            @liked_items = LikedItem.all
            render :index
        end
    end 

    def show
        @liked_item = LikedItem.find(params[:id])
        render :show
    end

    def create
        @liked_item = LikedItem.create(liked_item_params)
        @liked_item.user_id = current_user.id
        if @liked_item.save 
            render :show 
            
        else
            render json:['You already liked this item'], status: 422
        end
    end 

    def destroy
        @liked_item = LikedItem.find(params[:id])
        if @liked_item.destroy
            render :show
        else
            render json: ['Cannot find the specified liked item'], status: 404
        end
    end


    private 

    def liked_item_params
        params.require(:liked_item).permit(:user_id, :product_id)
    end 

end
