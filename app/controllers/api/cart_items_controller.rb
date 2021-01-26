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
    current_user.cart_items.each do |cart_item|
      if cart_item.product_id == (params[:cart_item][:product_id]).to_i
        cart_item.quantity += 1
        cart_item.save!
        @cart_item = cart_item
        render :show
        return
      end
    end 
      @cart_item = CartItem.create(cart_item_params)
      if @cart_item.save!
        render :show
      else
        render :json ['Invalid Product'], status: 422
      end
  end

  def destroy
    # debugger
    @cart_item = CartItem.find(params[:id])
    @cart_item.destroy
    render :show
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:product_id, :user_id, :quantity)
  end
end
