class Api::CartItemsController < ApplicationController
  def index
    @cart_items = current_user.cart_items
    render :index

    # render :json ["please login"], status:400
  end

  def show
    @cart_item = CartItem.find(params[:id])
    render :show
  end

  def create
    # current_user.cart_items.each do |cartItem|
    #   if cartItem.productId == params[:cartItem][:product_id]
    #     cartItem.quantity += 1
    #     cartItem.save!
    #     @cart_item = cartItem
    #     render :show
    #   else
    #     @cart_item = CartItem.create(cart_item_params)
    #     if @cart_item.save!
    #       render :show
    #     else
    #       render :json ['Invalid Product'], status: 422
    #     end
    #   end
    # end
    # render :show
    
    
    @cart_item = CartItem.create(cart_item_params)
    
    if @cart_item.save
      
      render :show
    else
      render json: @cart_item.errors.full_messages, status: 404
    end
  end

  def destroy
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render :show
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:product_id, :user_id, :quantity)
  end
end
