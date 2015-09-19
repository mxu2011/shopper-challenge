Rails.application.routes.draw do
  resources :applicants, only: [:create, :update]
  resources :funnels, only: [:index]

  root 'applicants#index'
  get '/*path' => 'application#index'
end
