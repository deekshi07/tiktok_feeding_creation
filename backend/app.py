
from fastapi import FastAPI
from ai_scripts import generate_script
from video_renderer import render_video
from database import save_data

app = FastAPI()

@app.post("/generate-script")
async def generate_script_endpoint(content_idea: str):
    script = generate_script(content_idea)
    return {"script": script}

@app.post("/render-video")
async def render_video_endpoint(script: str):
    video_url = render_video(script)
    return {"video_url": video_url}

@app.post("/save")
async def save_endpoint(data: dict):
    save_data(data)
    return {"status": "success"}