@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :body, :rating, :author_id, :product_id
        json.user review.user.first_name
        json.product review.product
        json.product_photo review.product.photos.map {|photo| url_for(photo)}
    end
end
