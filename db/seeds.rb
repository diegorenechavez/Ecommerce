# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# category: hair/body/face


require 'open-uri'
User.destroy_all
Product.destroy_all
Review.destroy_all
user_1 = User.create(name:"Morty", username:"AdventureKid", email:"morty@rick.com", password:"password")
product_3 = Product.create(name: "Olive Branch", category:"featured", price:10, size:16, description:"Get in a lather with the delicate perfume of a Mediterranean orange grove.", instruction:"Get naked, hop in the shower and lather up."  )
product_4 = Product.create(name: "American Cream", category:"featured", price:10, size:16, description:"Cleansing fresh strawberries and sweet vanilla absolute go together like rama lama lama ka dinga da dinga dong.", instruction:"Get naked, hop in the shower and lather up."  )
product_5 = Product.create(name: "Nana", category:"featured", price:10, size:16, description:"Step out of your clothes, hop into the shower and lather up with this creamy, dreamy body wash that smells just like fresh-baked banana bread." , instruction:"Get naked, hop in the shower and lather up." )
# product_6 = Product.create(name: "Rehab", category:"featured", price:25, size:16, description:"For hair that's been heat-styled, bleached, dyed, teased and flat-out stressed." , instruction:"Get naked, hop in the shower and lather up." )
product_7 = Product.create(name: "Daddy-O", category:"featured", price:15, size:16, description:"Ideal for blondes and people with gray or graying hair who want to keep brass at bay and leave their tresses looking fresh, healthy, bright and shiny." , instruction:"Get naked, hop in the shower and lather up." )


#__________________________HAIR____________________________
# product_1 = Product.create(name: "Big Shampoo", category:"hair", price:25, size:10, description:"Over half the base of Big Shampoo is made with sea salt to help give massive volume to hair in need of a boost. Sea salt is also full of minerals and de-greases hair, removing dead skin cells and dirt without stripping natural oils for a fresh, squeaky clean feeling. We balance the sea salt with seaweed infusion and extra virgin coconut oil for soft, nourished locks. Finally, fresh citrus juices are squeezed in for incredible shine. It's no wonder this one's a best-seller!", instruction:"Apply a small amount to the hair, work into a lather, then rinse thoroughly." )


product_10 = Product.create(name: "Wasabi Shan Kui", category:"hair", price:11, size:16, description:"Great for fine, oily hair looking for added volume and shine with a stimulating blend of herbs and oils to stimulate and exfoliate the scalp.", instruction:"Get naked, hop in the shower and lather up.")
product_10.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/wasabi.png"), filename:'wasabi.png')
product_10.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/wasabi2.png"), filename:'wasabi2.png')

product_11 = Product.create(name: "Cynthia Sylvia Stout", category:"hair", price:10, size:16, description:"Battling it out with dry, frizzy hair? Add weight, softness and shine with this yeast- and stout-rich shampoo that'll leave you feeling sleek'nssy.", instruction:"Get naked, hop in the sh'wer and lather up.")
product_11.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/stout.png"), filename:'stout.png')
product_11.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/stout2.png"), filename:'stout2.png')

product_12 = Product.create(name: "Fairly Traded Honey", category:"hair", price:12, size:16, description:"Good for all hair types, but especially dry hair in need of moisture. Honey is a natural humectant that draws hydration into the hair, and linseed muiwill leave you sleek.", instruction:"Get naked, hop in the shower and lather up." )
product_12.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/honey.png"), filename:'honey.png')
product_12.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/honey2.png"), filename:'honey2.png')

product_13 = Product.create(name: "Candy Rain", category:"hair", price:10, size:16, description:"Treat dry, frizzy or curly hair to this rich and sweet-scented conditioner made with some of our most hydrating ingredients like cashew cream and coconut oil.", instruction:"Get naked, hop in the shower and lather up." )
product_13.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/candy.png"), filename:'candy.png')
product_13.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/candy2.png"), filename:'candy2.png')

product_14 = Product.create(name: "Happy Happy Joy Joy", category:"hair", price:14, size:16, description:"Looking for a good, gentle conditioner that'll work for just about any hair type? We have some happy news: this soothing smoother is made with conditioning jo'ba alming rose water.", instruction:"Get naked, hop in the shower and lather up." )
product_14.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/happy.png"), filename:'happy.png')
product_14.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/happy2.png"), filename:'happy2.png')

product_15 = Product.create(name: "Sea Spray", category:"hair", price:17, size:16, description:"This sea salt mist is good for most hair types looking to add body, shine and texture thanks to its light hold and intoxicating citrusy-floral fragrance.", instruction:"Get naked, hop in the shower and lather up." )
product_15.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/sea2.png"), filename:'sea2.png')
product_15.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/sea.png"), filename:'sea.png')

product_16 = Product.create(name: "Big Shampoo", category:"hair", price:25, size:16, description:"This sea salt shampoo is good for most hair types looking to add body, shine and texture thanks to its light hold and intoxicating citrusy-floral fragrance.", instruction:"Get naked, hop in the shower and lather up." )
product_16.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/big.png"), filename:'big.png')
product_16.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/big2.png"), filename:'big2.png')

product_17 = Product.create(name: "Retread", category:"hair", price:45, size:16, description:"One of our richest conditioners for dry, damaged hair, we've packed this one with strengthening soy milk and hydrating olive oil for soft, sleek hair.", instruction:"After shampooing, smooth conditioner through your hair, concentrating on the ends. Rinse out and you're done!" )
product_17.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/retread.png"), filename:'retread.png')
product_17.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/retread2.png"), filename:'retread2.png')


#__________________________FACE____________________________
product_8 = Product.create(name: "Dark Angels", category:"face", price:15, size:16, description:"For sensitive skin with excess oil. It features deep-cleansing charcoal powder and rhassoul mud, exfoliating sugar and softening avocado oil.", instruction:"Get naked, hop in the shower and lather up."  )
product_8.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/darkangels.png"), filename:'darkangels.png')
product_8.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/darkangels2.png"), filename:'darkangels2.png')

product_16 = Product.create(name: "Cup of Coffee", category:"face", price:21, size:16, description:"If you love the original Cup of Coffee but prefer a gentler scrub or want a vegan version, this is the one you want. Made with the same base of scrubby sea 'alt, softening 'avocado butter and refreshing lime, our sel'perving formula will still exfoliate, moisturize and brighten, but it will leave more of a protective layer on the skin after rinsing.", instruction:"Apply to damp skin and rub gently to exfoliate and refresh the skin. Rinse clean and pat dry.")
product_16.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/coffee.png"), filename:'coffee.png')
product_16.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/coffee2.png"), filename:'coffee2.png')

product_17 = Product.create(name: "Angels on Bare Skin", category:"face", price:16, size:16, description:"This heavenly blend of cleansing kaolin clay, ground almonds and a soothing blend of lavender, rose and chamomile oils has been a customer favorite for years. A quick scrub with this nubbly cleanser leaves skin calm, balanced, soft and smooth, and because it's so gentle, anyone can use it.", instruction:"Take a small amount in your hand, add a little water and mix into a paste. Massage into skin to gently cleanse, then rinse clean. Use all over your body for soft skin everywhere!")
product_17.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/angels.png"), filename:'angels.png')
product_17.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/angels2.png"), filename:'angels2.png')

product_18 = Product.create(name: "Kalamazoo", category:"face", price:12, size:16, description:"Keep things bright and bushy with this creamy wash for furry faces. Fresh pineapple juice is full of enzymes to cleanse the skin and zap away dirt and oil, while almond oil, jojoba oil and cupuaç' bur soften and tame even the most unruly beard. With the light citrusy scent of Brazillian orange oil and a super soft feel, your beard'll have more admirers than ever before!", instruction:"Massage over beard and face to create a rich lather, then rinse off and pat dry.")
product_18.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/kalamazoo.png"), filename:'kalamazoo.png')
product_18.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/kalamazoo2.png"), filename:'kalamazoo2.png')

product_19 = Product.create(name: "Don't Look At Me", category:"face", price:14, size:16, description:"Well hello, don't be shy! Smooth on this vivid blue mask and you'll want to show anyone and everyone your vibrant complexion. Ground rice gently scrubs away dry skin, murumuru butter moisturizes and zingy lemon juice tones. And if that wasn't enough, we've added organic silken tofu to soften you up in all the right ways. The stunning results will have you coming back for more of this s 'rubby, softening goodness.", instruction:" 'Smooth mask all over your skin. Leave on for 15 minutes then rinse off with warm'wr, massaging as you go.")
product_19.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/dontlookatme2.png"), filename:'dontlookatme2.png')
product_19.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/dontlookatme.png"), filename:'dontlookatme.png')

product_20 = Product.create(name: "Gorgeous", category:"face", price:70, size:16, description:"Skincare doesn’t get any better than Gorgeous. This light and gentle moisturizer is perfect for every skin type thanks to a blend of soothing ingredients like orange blossom honey, extra virgin olive and wheat germ oils to leave your skin feeling soft and matte. Made fresh in small batches, it also contains fresh pineapple, lemon and orange juices to help cleanse while it moisturizes. Its legion of fans will sure be the first to  tell you how much their skin has improved since they started using Gorgeous...care to join them?", instruction:"Apply a dab onto a clean face for smooth, silky skin.")
product_20.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/gorgeuos.png"), filename:'gorgeuos.png')
product_20.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/gorgeuos2.png"), filename:'gorgeuos2.png')

product_21 = Product.create(name: "Skin's Shangri La", category:"face", price:50, size:16, description:"Welcome to paradise for dry or mature skin. Our richest moisturizer helps rejuvenate mature skin with jojoba oil, soothing aloe vera extract and Queen of Hungary water—a mixture of water, vodka and rosemary that's known to tighten and firm fine lines. We've also added an antioxidant-rich wheatgrass infusion to restore moisture that's been lost.", instruction:"Apply a dab onto a clean face for smooth, silky skin.")
product_21.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/skinsh.png"), filename:'skinsh.png')
product_21.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/skinsh2.png"), filename:'skinsh2.png')

product_22 = Product.create(name: "Vanishing Cream", category:"face", price:40, size:16, description:"This combination of lavender and witch hazel will tone and balance oily and combination skin to leave it feeling fresh, hydrated and never greasy or bogged down", instruction:"Apply a dab onto a clean face for smooth, silky skin.")
product_22.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/vanishing.png"), filename:'vanishing.png')
product_22.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/vanishing2.png"), filename:'vanishing2.png')


#__________________________BODY____________________________
product_9 = Product.create(name: "Nana", category:"body", price:10, size:16, description:"Step out of your clothes, hop into the shower and lather up with this creamy, dreamy body wash that smells just like fresh-baked banana bread." , instruction:"Get naked, hop in the shower and lather up." )
product_9.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/nana.jpg"), filename:'nana.jpg')
product_9.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/nana2.jpg"), filename:'nana2.jpg')


product_23 = Product.create(name: "Dirty Body Wash", category:"body", price:10, size:16, description:"Like a cool dip in a mountain spring, Dirty leaves you feeling invigorated thanks to refreshing spearmint and menthol crystals. We've also loaded this self-preserving gel with vegetarian glycerin and sea salt to soften your skin while you're washing up", instruction:"Get naked, hop in the shower and lather up." )
product_23.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/dirty.jpg"), filename:'dirty.jpg')
product_23.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/dirty2.jpg"), filename:'dirty2.jpg')

product_24 = Product.create(name: "Rose Jam", category:"body", price:10, size:16, description:"Well, now you can enjoy it all year round. This decadent, lemon-rose shower gel is made with a vanilla pod infusion, goji berry juice and nourishing argan oil to leave skin soft, hydrated and sweetly scented. Lovers of our Rose Jam Bubbleroon and Ro's Argan Body Conditioner will recognize its gorgeous fragrance, so you can double or triple up and never be without this irresistible scent.", instruction:"Get naked, hop in the shower and lather up." )
product_24.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/rosejam.png"), filename:'rosejam.png')
product_24.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/rosejam2.png"), filename:'rosejam2.png')

product_25 = Product.create(name: "Lord of Misrule", category:"body", price:10, size:16, description:"Lavish your skin by lathering up this with shower gel, full moisturizing glycerin and wheat germ oil. With skin so soft, don't be surprised if you find yourself getting up to no good.", instruction:"Get naked, hop in the shower and lather up." )
product_25.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/misrule.png"), filename:'misrule.png') 
product_25.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/misrule2.png"), filename:'misrule2.png')

product_26 = Product.create(name: "Prince Charming", category:"body", price:9, size:16, description:"Lather up with this sweet, limited-edition sudser that's only hanging around for Valentine's Day. A blend of sweet marshmallow root and vanilla pod infusion, uplifting grapefruit oil and soothing ge 'anium oil make up this cheerful charmer. So'hstle while you wash and enjoy skin-softening carrageenan extract and invigorating fresh pomegranate juice to get your skin bright and beautiful.", instruction:"Get naked, hop in the shower and lather up." )
product_26.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/prince.png"), filename:'prince.png')
product_26.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/prince2.png"), filename:'prince2.png')

product_27 = Product.create(name: "Olive Branch", category:"body", price:10, size:16, description:"Get in a lather with the delicate perfume of a Mediterranean orange grove.", instruction:"Get naked, hop in the shower and lather up."  )
product_27.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/olivebranch.jpg"), filename:'olivebranch.jpg')
product_27.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/olivebranch2.jpg"), filename:'olivebranch2.jpg')

product_28 = Product.create(name: "Ro's Argan", category:"body", price:36, size:16, description:"Packed with cocoa, shea and cupuacu butters along with brazil nut, almond and argan oils, this luxurious, self-preserving conditioner deeply moisturizes skin without a greasy feel. After washing up, massage it all over your body, then rinse and pat dry for supremely soft, vanilla and rose-scented skin.", instruction:"Smooth all over wet skin after washing, then rinse clean." )
product_28.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/argan.png"), filename:'argan.png')
product_28.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/argan2.png"), filename:'argan2.png')

product_29 = Product.create(name: "Tingle", category:"body", price:36, size:16, description:" 'After soaping up and rinsing off, smooth this invigorating peppermint creation all over to hydrate and nourish skin. Jojoba oil, murumuru and shea butters soften, while menthol gives a tingly sensation. Rinse off and you're ready to go! Also available in a potted version.", instruction:"Smooth all over wet skin after washing, then rinse clean." )
product_29.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/tingle.png"), filename:'tingle.png')
product_29.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/tingle2.png"), filename:'tingle2.png')



#PHOTO ATTACHMENTS
product_3.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/olivebranch.jpg"), filename:'olivebranch.jpg')
product_3.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/olivebranch2.jpg"), filename:'olivebranch2.jpg')
product_4.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/americancream.jpg"), filename:'americancream.jpg')
product_4.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/americancream2.jpg"), filename:'americancream2.jpg')
product_5.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/nana.jpg"), filename:'nana.jpg')
product_5.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/nana2.jpg"), filename:'nana2.jpg')
# product_6.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/rehab.jpg"), filename:'rehab.jpg')
# product_6.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/rehab2.jpg"), filename:'rehab2.jpg')
product_7.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/daddyo.jpg"), filename:'daddyo.jpg')
product_7.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/daddyo2.jpg"), filename:'daddyo2.jpg')

# product_9.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/nana.jpg"), filename:'nana.jpg')
# product_9.photos.attach(io: open("https://bubbles-lush-dev.s3-us-west-1.amazonaws.com/nana2.jpg"), filename:'nana2.jpg')

# __________________________________REVIEWS__________________________________________________
review_1 = Review.create(title: "Best Body Wash Out There!", rating: 5, author_id:1, product_id:4, body:"OK, I will start by admitting the texture of this body wash takes some getting used to - it is reminiscent of boogers or slime. Once you get over this fact, this body wash is pretty amazing, and one of my absolute favorites. I always use exfoliating gloves, loofah, or wash cloth to apply because it helps make suds. The scent is my favorite - banana! It lingers a bit throughout the morning, and moreso when I use my favorite body lotion with it - Sympathy for the Skin, which is like vanilla with a teensy tiny hint of banana. My skin feels so soft! Seriously, just try it. Once you get over the texture, it is wonderful.")
review_2 = Review.create(title: "This is my new favorite product!", rating: 5, author_id:1, product_id:2, body:"For many years I have been trying to find something that works for my skin (I have sensitive skin). Most products either feel good or smell good, I finally found one that does both!. I would highly recommend it for people with sensitive skin")
review_3 = Review.create(title: "My Favorite Find!", rating: 5, author_id:1, product_id:5, body:" 'I had bleached platinum blonde hair for years, and this was my go to hair treatment (R&B) for a very long time. I put a small quarter size amount in my hair when damp and styled, and my hair remained healthy and shiny despite the monthly bleaching. Along came Covid and I now have a head of gray/steel colored hair, and to my delight this product still works wonderfully despite that my hair is no longer damaged..")
# review_4 = Review.create(title: "My Favorite Find!", rating: 5, author_id:1, product_id:3, body:"")
# review_5 = Review.create(title: "My Favorite Find!", rating: 5, author_id:1, product_id:4, body:"")
# review_6 = Review.create(title: "My Favorite Find!", rating: 5, author_id:1, product_id:4, body:"")
# review_7 = Review.create(title: "My Favorite Find!", rating: 5, author_id:1, product_id:4, body:"")
# review_8 = Review.create(title: "My Favorite Find!", rating: 5, author_id:1, product_id:4, body:"")
review_9 = Review.create(title: "My Favorite Find!", rating: 5, author_id:1, product_id:4, body:"I loved this product! It smells more like vanilla than Bananas if you ask me, but theres still a slight banana hint. The color is fun too, its bright yellow. Will buy again in a bigger size")
revew_10 = Review.create(title: "who smells so good?", rating: 4, author_id:1, product_id:3, body: "when you are used to silicon filled conditioner it's definitely a change, hard to get used to your hair not feeling silky smooth in the shower, but definitely worth it. i found it wasn't moisturizing enough for my dry frizzy hair, that is UNTIL i brushed it through my hair in the shower with a comb, i think it really helped penetrate my hair further. plus the sweet vanilla scent is to die for & you will get compliments often! after my hair dried it was sooo shiny & light feeling, so with a little extra effort i say it's worth it.")




# cart_item_1 = CartItem.create(user_id: 1, product_id:3, quantity:1)