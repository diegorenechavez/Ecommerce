class Api::ProductsController < ApplicationController

    def index
        if params[:category] == "featured"
            @products = Product.where({category: "featured"})
            render :index
        elsif params[:category] == "hair"
            @products = Product.where({category: "hair"})
            render :index
        elsif params[:category] == "body"
            @products = Product.where({category: "body"})
            render :index
        elsif params[:category] == "face"
            @products = Product.where({category: "face"})
            render :index
        else @products = Product.all
         render :index 
        end 
    end 
    
    def show
        @product = Product.find(params[:id])
        render :show
    end 

   

end
