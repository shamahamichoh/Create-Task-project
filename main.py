from flask import Flask, send_from_directory, render_template_string

app = Flask(__name__)



@app.route("/")
def home_page():
    with open("main.html") as file:
        content = file.read()
    return render_template_string(content)

@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory('.', filename)


if __name__ == "__main__":
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    app.run(host='0.0.0.0', port=5001, debug=True)


