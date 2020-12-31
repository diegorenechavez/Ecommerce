class Api::ProductsController < ApplicationController

    def index
        @products = Product.all
        render :index 
    end 

    def show
        @products = Product.find(params[:id])
        render :show
    end 

end
