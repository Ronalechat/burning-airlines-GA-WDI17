Rails.application.routes.draw do
  root :to => 'pages#index'

  resources :reservations
  resources :users
  resources :flights
  resources :airplanes
end
