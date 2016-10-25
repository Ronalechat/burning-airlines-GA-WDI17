Rails.application.routes.draw do
  get 'pages/index'

  root :to => 'pages#index'

  resources :reservations
  resources :users
  resources :flights
  resources :airplanes
end
