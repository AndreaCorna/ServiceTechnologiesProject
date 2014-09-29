Rails.application.routes.draw do


  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'home#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end



    resources :sessions, only: [:create, :destroy]
    resource :home, only: [:index]

  root 'home#index'



  resources :city, :only => [:index , :show,]    do
    resources :hotels    ,  :only => [:index,:show]
    resources :culture   ,  :only => [:index,:show]
    resources :entertainment  ,  :only => [:index,:show]
    resources :utility  ,  :only => [:index,:show]
    resources  :food     ,  :only => [:index,:show]

  end

  resources :guides

 get '/api/me', to: 'users#me'
 get '/auth/login', to: 'auth#login'
 get '/auth/signup', to: 'auth#signup'
 get '/auth/facebook', to: 'auth#facebook'
 get '/auth/google', to: 'auth#google'






end
