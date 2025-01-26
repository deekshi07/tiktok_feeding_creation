from pymongo import MongoClient
import os

mongo_uri = os.getenv("MONGO_URI")
client = MongoClient(mongo_uri)
db = client["tiktok_creator"]


def save_data(data):
    db["videos"].insert_one(data)