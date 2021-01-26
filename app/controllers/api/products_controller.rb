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

    def search
        query=params[:query]
        @products = Product.where('name ILIKE ? OR description ILIKE ? OR category ILIKE ?', "%#{query}%", "%#{query}%", "%#{query}%")
        if @products.length > 0
            render :index
        else
            render json: ["Sorry, we did not find any results for #{query}, try another search"], status: 404
        end
        
    end

    private
    def product_params
        params.require(:product).permit(:name, :description, :category)
    end

end
