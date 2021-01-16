@products.each do |product|
    json.set! product.id do 
         json.extract! product, :id, :description, :name, :category, :price, :instruction, :size
         json.photoUrls product.photos.map { |file| url_for(file) }
    end 
end 