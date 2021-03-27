class CurrenciesController < ApplicationController
    def index
    end

    def search
        @currencies = Currency.where('Lower(name) LIKE ?',"%#{params[:search].downcase}%")
        render json: {currencies: @currencies}
    end

    def calculate
        @currency ||= Currency.find(params[:id]);
        @amount = params[:amount];
        render json: {
            currency: @currency,
            current_price: @currency.current_price,
            amount: amount,
            value: @currency.calculate_value(amount)
        }
    end
end