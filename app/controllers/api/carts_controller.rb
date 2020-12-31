class Api::CartsController < ApplicationController
    def show
        @cart - pin.find(params[:id])
        render :show
    end 
end
