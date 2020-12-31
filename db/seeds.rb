# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product_1 = Product.create(name: "Big Shampoo", category:"shampoo", price:25, size:10, description:"Over half the base of Big Shampoo is made with sea salt to help give massive volume to hair in need of a boost. Sea salt is also full of minerals and de-greases hair, removing dead skin cells and dirt without stripping natural oils for a fresh, squeaky clean feeling. We balance the sea salt with seaweed infusion and extra virgin coconut oil for soft, nourished locks. Finally, fresh citrus juices are squeezed in for incredible shine. It's no wonder this one's a best-seller!", instruction:"Apply a small amount to the hair, work into a lather, then rinse thoroughly." )
product_2 = Product.create(name: "Dirty Body Wash", category:"body", price:10, size:16, description:"Like a cool dip in a mountain spring, Dirty leaves you feeling invigorated thanks to refreshing spearmint and menthol crystals. We've also loaded this self-preserving gel with vegetarian glycerin and sea salt to soften your skin while you're washing up", instruction:"Get naked, hop in the shower and lather up." )