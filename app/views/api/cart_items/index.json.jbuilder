# @cart_items.each do |cart_item|
#   json.set! cart_item.id do
#     json.productId cart_item.product_id
#     json.extract! cart_item.product, :name, :size, :id, :price
#     json.photoUrls cart_item.product.photos.map { |file| url_for(file) }
#   end
# end

@cart_items.each do |cart_item|
  json.set! cart_item.id do
    json.quantity cart_item.quantity
    json.productId cart_item.product_id
    json.cartItemId cart_item.id
    json.extract! cart_item.product, :name, :size, :id, :price
    json.photoUrls cart_item.product.photos.map { |file| url_for(file) }
  end
end
