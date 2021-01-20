class Api::CartItemsController < ApplicationController
    def index
        @cart_items = current_user.cart_items
        render :index
    end


    def create
        current_user.cart_items.each do |cartItem|
            if cartItem.product_id == params[:cartItem][:product_id]
                cartItem.quantity += 1
                cartItem.save!
                @cart_item = cartItem
                render :index
            else
                @cart_item = CartItem.create(cart_item_params)
                if @cart_item.save!
                    render :index
                else
                    render :json ['Invalid Product', status: 422]
                end
            end
        end
    end 

    def destroy 
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        render :index
    end 

    private 
    def cart_item_params
        params.require(:cart_item).permit(:id, :product_id, :user_id, :quantity)
    end 

end
