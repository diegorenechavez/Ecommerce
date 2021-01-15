@products.each do |product|
    json.set! product.id do 
         json.extract! product, :id, :description, :name, :category, :price, :instruction
         json.photoUrl url_for(product.photo)
    end 
end 