# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding data..."

15.times do 
    Author.create(name: Faker::Book.author)
end

5.times do 
    Genre.create(name: Faker::Book.genre)
end

24.times do
    Poem.create(
        title: Faker::Book.title,
        content: Faker::Quote.matz,
        author_id: rand(1...15),
        genre_id: rand(1...5),
        upvotes: rand(1...300),
        downvotes: rand(1...300)
    )
end

puts "🌱 Done seeding!"