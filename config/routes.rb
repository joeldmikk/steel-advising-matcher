Rails.application.routes.draw do
  resources :consultants
  resources :clients
  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}
  # devise_scope :user do
  #   get 'user/sign_in', to: 'admins/sessions#new', as: :new_admin_session
  #   get 'user/sign_out', to: 'admins/sessions#destroy', as: :destroy_admin_session
  # end
  resources :users
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "home#index"

  match '/overview', to: 'talent_matrix#overview', via: 'get', as: :overview
  match '/clients_overview', to: 'talent_matrix#clients_overview', via: 'get', as: :clients_overview
  match '/consultants_overview', to: 'talent_matrix#consultants_overview', via: 'get', as: :consultants_overview

  match '/home', to: 'home#index', via: 'get', as: :home

end
