# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product_1 = Product.create(name: "Big Shampoo", category:"featured", price:25, size:10, description:"Over half the base of Big Shampoo is made with sea salt to help give massive volume to hair in need of a boost. Sea salt is also full of minerals and de-greases hair, removing dead skin cells and dirt without stripping natural oils for a fresh, squeaky clean feeling. We balance the sea salt with seaweed infusion and extra virgin coconut oil for soft, nourished locks. Finally, fresh citrus juices are squeezed in for incredible shine. It's no wonder this one's a best-seller!", instruction:"Apply a small amount to the hair, work into a lather, then rinse thoroughly." )
product_2 = Product.create(name: "Dirty Body Wash", category:"featured", price:10, size:16, description:"Like a cool dip in a mountain spring, Dirty leaves you feeling invigorated thanks to refreshing spearmint and menthol crystals. We've also loaded this self-preserving gel with vegetarian glycerin and sea salt to soften your skin while you're washing up", instruction:"Get naked, hop in the shower and lather up." )
product_3 = Product.create(name: "Olive Branch", category:"featured", price:10, size:16, description:"Get in a lather with the delicate perfume of a Mediterranean orange grove.", instruction:"Get naked, hop in the shower and lather up."  )
product_4 = Product.create(name: "American Cream", category:"featured", price:10, size:16, description:"Cleansing fresh strawberries and sweet vanilla absolute go together like rama lama lama ka dinga da dinga dong.", instruction:"Get naked, hop in the shower and lather up."  )
product_5 = Product.create(name: "Nana", category:"featured", price:10, size:16, description:"Step out of your clothes, hop into the shower and lather up with this creamy, dreamy body wash that smells just like fresh-baked banana bread." , instruction:"Get naked, hop in the shower and lather up." )
product_6 = Product.create(name: "Rehab", category:"featured", price:25, size:16, description:"For hair that's been heat-styled, bleached, dyed, teased and flat-out stressed." , instruction:"Get naked, hop in the shower and lather up." )
product_7 = Product.create(name: "Daddy-O", category:"featured", price:15, size:16, description:"Ideal for blondes and people with gray or graying hair who want to keep brass at bay and leave their tresses looking fresh, healthy, bright and shiny." , instruction:"Get naked, hop in the shower and lather up." )
product_7 = Product.create(name: "Dark Angels", category:"featured", price:15, size:16, description:"For sensitive skin with excess oil. It features deep-cleansing charcoal powder and rhassoul mud, exfoliating sugar and softening avocado oil.", instruction:"Get naked, hop in the shower and lather up."  )
