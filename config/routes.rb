Rails.application.routes.draw do
  get 'pages/index'

  root :to => 'pages#index'
  get '/login' => 'session#new'
  post '/login' => 'session#create'
  # delete '/login' => 'session#destroy'

  resources :reservations
  resources :users
  resources :flights
  resources :airplanes
end
