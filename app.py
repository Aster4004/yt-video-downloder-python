import os
from flask import Flask, render_template, request, send_file, send_from_directory
from pytube import YouTube
from io import BytesIO

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/download', methods=['GET'])
def download():
    video_url = request.args.get('fileUrl')

    try:
        yt = YouTube(video_url)
        video_stream = yt.streams.get_highest_resolution()
        path = video_stream.get_file_path()
        name = os.path.basename(path)
        # data = BytesIO()
        video_stream.download(output_path="./videos")
        print(name)

        return send_file("./videos/" + name, as_attachment=True)

    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")