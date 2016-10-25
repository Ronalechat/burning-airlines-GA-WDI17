Rails.application.routes.draw do
  root :to => '/'

  resources :reservations
  resources :users
  resources :flights
  resources :airplanes
end
