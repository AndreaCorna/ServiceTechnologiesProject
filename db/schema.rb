# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140928192505) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", id: false, force: true do |t|
    t.string "name",  null: false
    t.string "state"
    t.float  "lat"
    t.float  "lng"
  end

  create_table "city_images", force: true do |t|
    t.string "url"
    t.string "city_id"
  end

  add_index "city_images", ["city_id"], name: "index_city_images_on_city_id", using: :btree

  create_table "guides", force: true do |t|
    t.string  "name"
    t.text    "description"
    t.integer "rating"
    t.string  "city"
  end

  create_table "place_summaries", force: true do |t|
    t.string  "google_id"
    t.string  "name"
    t.decimal "lat"
    t.decimal "lng"
    t.integer "rating"
    t.integer "price"
    t.string  "image"
    t.string  "icon"
    t.string  "tag"
    t.text    "description"
    t.string  "city"
  end

  add_index "place_summaries", ["google_id"], name: "index_place_summaries_on_google_id", using: :btree

  create_table "places_to_guides", force: true do |t|
    t.integer  "guide_id"
    t.integer  "place_summary_id"
    t.string   "date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
  end

end
