class ChangeUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
           t.string :email
           t.string :password
           t.string :first_name
           t.string :last_name
           t.string :facebook
           t.string :google
           t.string :linkedin
           t.string :twitter

         end
  end
end
