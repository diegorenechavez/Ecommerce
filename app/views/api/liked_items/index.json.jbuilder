@liked_items.each do |liked_item|
    json.set! liked_item.id do
        json.extract! liked_item.product, :name, :size, :id, :price, :category, :description
        json.photoUrls liked_item.product.photos.map { |file| url_for(file) }
        json.user_id liked_item.user_id
        json.product_id liked_item.product_id
        json.liked_item_id liked_item.id
    end
end

# @liked_items.each do |liked_item|
#   json.set! liked_item.id do
#     json.quantity liked_item.user_id
#     json.productId liked_item.product_id
#     json.extract! liked_item.product, :name, :size, :id, :price, :description, :category
#     json.photoUrls liked_item.product.photos.map { |file| url_for(file) }
#   end
# end
