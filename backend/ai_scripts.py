
import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def generate_script(content_idea):
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=f"Create a TikTok script for the idea: {content_idea}",
        max_tokens=150
    )
    return response["choices"][0]["text"].strip()
