class Api::CartItemsController < ApplicationController
    def index
        @cart_items = CartItem.all
        render :index
    end

    def create
        @cart_item = CartItem.create(cart_item_params)
        if @cart_item.save
            render :show
        else 
            render json: @cart_item.errors.full_messages, status: 404
        end 
    end 

    def destroy 
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.destroy
            render json: @cart_item.id
        else 
            render json: @cart_item.errors.full full_messages, status: 404
        end 
    end 

    private 
    def cart_item_params
        params.require(:cart_item).permit(:product_id, :cart_id)
    end 

end
