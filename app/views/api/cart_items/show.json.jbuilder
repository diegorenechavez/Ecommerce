# json.extract! @cart_item, :product_id, :user_id, :quantity, :id

# json.set! @cart_item.id do
    json.extract! @cart_item, :product_id, :user_id, :quantity, :id
    json.extract! @cart_item.product, :name, :size, :id, :price
    json.photoUrls @cart_item.product.photos.map { |file| url_for(file) }
# end

# json.extract! cart_item.product, :name, :size, :id, :price
#     json.photoUrls cart_item.product.photos.map { |file| url_for(file) }