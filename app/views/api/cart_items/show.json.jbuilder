json.extract! @cart_item, :product_id, :user_id, :quantity, :id
json.cartItemId @cart_item.id
json.extract! @cart_item.product, :name, :size, :id, :price
json.photoUrls @cart_item.product.photos.map { |file| url_for(file) }





# json.extract! cart_item.product, :name, :size, :id, :price
#     json.photoUrls cart_item.product.photos.map { |file| url_for(file) }