# 👕 TrendZ (TrendZ for the GenZ)

![Status](https://img.shields.io/badge/Project-Completed-brightgreen)
![Tech Stack](https://img.shields.io/badge/Stack-ML%20%7C%20Flask%20%7C%20React-blue)
![License](https://img.shields.io/badge/License-MIT-lightgrey)

> **Flipkart GRID 4.0 – Software Development Challenge**  
> *Automated Fashion Trend Forecasting using Social Media Analytics & Computer Vision*

---

## ⭐ Project Overview
**TrendZ** is a full-stack ML-driven application that identifies real-time **fashion trends** from social media.  
It scrapes geo-tagged Twitter images and analyzes them using a **dual-model pipeline**:  
- **AWS Rekognition** for apparel detection  
- **Custom CNN** for color & pattern classification  

This supports e-commerce teams with automated, data-backed trend forecasting.

---

## 🚀 Features
- 🔍 **Geo-spatial image scraping** via Twint (no API key required)  
- 👕 **Dual-stage image analysis** (Object + Attribute detection)  
- 📊 **Trend score ranking** to highlight emerging fashion signals  
- 🖥️ **React dashboard** with sortable insights & source-image verification  
- ☁️ **Hybrid inference pipeline** using Google Colab GPU with backend tunneling  

---

## 🧠 ML Architecture

### 📌 Model Stack
| Component        | Role                        | Tech              |
|------------------|-----------------------------|-------------------|
| AWS Rekognition  | Apparel-type detection      | Cloud Vision API  |
| Custom CNN       | Color & pattern classification | TensorFlow/Keras |
| Twint Scraper    | Tweet & image extraction    | Python            |
| Inference Runtime| Large-batch processing      | Google Colab GPU  |

---

## 🏗️ System Architecture


![Trendzz system flow](https://user-images.githubusercontent.com/56505861/190875542-e30367e3-3fe3-4ed8-a00e-ec8163337bc3.png)

## 🛠️ Installation

### Backend (Flask)

```bash
git clone https://github.com/yourusername/TrendZ.git
cd TrendZ/backend
pip install -r requirements.txt
python app.py
Frontend (React)
bash
Copy code
cd ../frontend
npm install
npm start
```
ML Inference (Google Colab)
Upload the inference notebook to Google Colab.

Run the notebook to start the inference server (expose via tunnel).

Update the backend configuration with the tunnel URL.

## 📈 Challenges & Solutions

### 🚫 No local GPU for inference
✔ Offloaded ML workloads to Colab GPU and connected via tunneling between Colab and the local Flask backend.

### 🎨 Background noise causing false detections
✔ Added confidence thresholds and heuristic checks; identified semantic segmentation as a future enhancement area.

## 🔮 Future Improvements
Add semantic segmentation to isolate apparel from backgrounds.

Auto-map detected trends to Flipkart catalog IDs.

Improve the dashboard UX with richer visualizations and filters.

### 📜 License
This project is open-source under the MIT License.
