json.extract! @product, :id, :category, :description, :instruction, :name, :price, :size
json.photoUrls @product.photos.map {|photo| url_for(photo)}
