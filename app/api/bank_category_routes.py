import requests
import ast
from flask import Blueprint, jsonify, session, request

bank_category_routes = Blueprint('bank_category', __name__)


@bank_category_routes.route('/')
def get_bank_categories():
    url = "https://toolbox-us-api.private.fin.ag/v3/0a0b5678-ab76-48fa-8f72-e7f8f276fb9b/BankingServices/categories/us"

    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "authorization": 'Bearer ralLy57ZaXC70XG',
    }

    categories = requests.get(url, headers=headers)
    categories1 = categories.text

    thisCategory = ast.literal_eval(categories1)


    return {'bank_category': thisCategory}
