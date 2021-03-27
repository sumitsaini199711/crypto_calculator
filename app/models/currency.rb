class Currency < ApplicationRecord
    def calculate_value(amount)
        (current_price.to_f * amount.to_f).round(4);
    end

    def current_price
        api_key = 'c0a0b2d6-c1eb-4ac2-89b5-c3d1b8f89a58';
        url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY="+api_key;
        request = HTTParty.get(url)
        response = JSON.parse(request.body);
        data_response = response["data"];
        temp = '';
        data_response.each{ |crypto|
            if crypto["slug"] === self.slug
                temp = crypto["quote"]["USD"]["price"];
                break;
            end
        }
        current_price_of_crypto = temp;
    end

end
