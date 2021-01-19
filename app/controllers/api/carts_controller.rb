class Api::CartsController < ApplicationController
  def index
    if params[:user_id] === current_user.id
      @cart = Cart.where({ user_id: current_user.id })
      render :index
    end
  end

  def show
    @cart = Cart.find(params[:id])
    render :show
  end

  def create
    @cart = Cart.create(cart_params)
    @cart.user_id = current_user.id
    if @cart.save
      render :show
    else
      render json: ['could not create cart'], status: 422
    end
  end

  private

  def cart_params
    params.require(:cart).permit(:user_id)
  end
end
