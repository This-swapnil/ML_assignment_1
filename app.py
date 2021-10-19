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
            print(data_req)
            data = data_req.values()
            data = [list(map(float,data))]
            print(data)
            scaled = saved_scaler.transform(data)
            print(scaled)
            response = model.predict(scaled)
            print(response)
            return render_template('result.html', result=response[0])
        except Exception as e:
            error = {'error': e}
            print(error)
            return render_template('404.html', error=error)


if __name__ == "__main__":
    app.run(debug=True)


# [-0.41978194,  0.28482986, -1.2879095 , -0.27259857, -0.14421743,
#         0.41367189, -0.12001342,  0.1402136 , -0.98284286, -0.66660821,
#        -1.45900038,  0.44105193, -1.0755623 ]