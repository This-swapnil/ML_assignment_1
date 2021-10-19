from flask import Flask, render_template, request
import pickle
from flask_cors import CORS, cross_origin

app = Flask(__name__)

model = pickle.load(open('linear_challenge_assignment.pkl', 'rb'))
saved_scaler = pickle.load(open('scaler_trans.pkl', 'rb'))


@app.route('/', methods=['GET', 'POST'])
@cross_origin()
def Home():
    return render_template('index.html')


@app.route("/predict", methods=["POST"])
@cross_origin()
def predict():
    if request.method == "POST":
        try:
            data_req = dict(request.form)
            data = data_req.values()
            data = [list(map(float,data))]
            scaled = saved_scaler.transform(data)
            response = model.predict(scaled)
            return render_template('result.html', result=response[0])
        except Exception as e:
            error = {'error': e}
            return render_template('404.html', error=error)


if __name__ == "__main__":
    app.run(debug=True)