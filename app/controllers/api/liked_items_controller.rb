class Api::LikedItemsController < ApplicationController
    def index
        @liked_items = LikedItems.all
    end 

    def create
        @liked_item = LikedItem.create(liked_item_params)
        if @liked_item.save 
            render: show 
            
        else
            render json:@liked_item.errors.full_messages, status: 404
        end
    end 

    private 

    def liked_item_params
        params.require(:liked_item.permit(:user_id, :product_id))
    end 

end
