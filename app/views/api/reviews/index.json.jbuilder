@reviews.each do |review|
    json.set! review.product_id do
        json.extract! review, :id, :body, :rating, :author_id, :product_id, :title
        # json.user review.user.username
        # json.product review.product
        # json.product_photo review.product.photos.map {|photo| url_for(photo)}
    end
end
