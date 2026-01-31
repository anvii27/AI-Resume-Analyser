import pdfplumber
from fastapi import FastAPI, UploadFile, File

app = FastAPI()

@app.post("/parse")
async def parse_resume(file: UploadFile = File(...)):
    text = ""
    with pdfplumber.open(file.file) as pdf:
        for page in pdf.pages:
            text += page.extract_text()

    return {"text": text[:1000]}

