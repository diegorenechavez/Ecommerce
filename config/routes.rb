Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only:[:create, :show] do
      resources :reviews, only:[:index]
      resources :carts, only:[:show]
      resources :liked_items, only:[:create, :show, :index, :destroy]
    end 
    resource :session, only:[:create, :destroy]
    resources :products, only:[:show, :index] do
      resources :reviews, only:[:create, :index]
    end
    resources :carts, only:[:show]
    resources :cart_items, only:[:create, :edit, :destroy, :index, :show] do 
      resources :products, only:[:show, :index]
    end 
    get 'products/splash/:category', :to => 'products#index'
  end 
end
