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

ActiveRecord::Schema.define(version: 20141022172258) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cities", id: false, force: true do |t|
    t.string "name",  null: false
    t.string "state"
    t.float  "lat"
    t.float  "lng"
    t.string "link"
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
    t.string  "image"
    t.integer "user_id"
    t.boolean "shared"
  end

  add_index "guides", ["user_id"], name: "index_guides_on_user_id", using: :btree

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
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

end
