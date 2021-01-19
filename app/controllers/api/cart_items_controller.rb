class Api::CartItemsController < ApplicationController
     def index 
        # currentUser = User.find_by(id: current_user.id)
        # @cart_items = CartItem.where(cart_id: currentUser.id)
        # render :index

        if params[:cart_id]
            @cart_items = CartItem.includes(:cart).where(cart_id: params[:cart_id])
            render :index
        end 
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
            render json: @cart_item.errors.full_messages, status: 404
        end 
    end 

    private 
    def cart_item_params
        params.require(:cart_item).permit( :cart_id, :product_id, :quantity)
    end 

end
