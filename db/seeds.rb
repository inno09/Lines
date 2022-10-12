# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."

15.times do 
    Author.create(
        name: Faker::Book.author,
        image: Faker::Avatar.image(slug: "my-own-slug", size: "50x50", format: "bmp", set: "set1", bgset: "bg1"),
        description: Faker::Books::Dune.quote
    )
end

5.times do 
    Genre.create(
        name: Faker::Book.genre,
        description: Faker::Fantasy::Tolkien.poem
    )
end

24.times do
    Poem.create(
        title: Faker::Book.title,
        content: Faker::Quote.matz,
        author_id: rand(1...15),
        genre_id: rand(1...5),
        upvotes: rand(1...1000),
        downvotes: rand(1...1000)
    )
end

puts "🌱 Done seeding!"