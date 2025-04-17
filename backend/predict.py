import sys
import json
import joblib

# Load saved models and dictionaries
model = joblib.load('disease_predictor_rf.pkl')
symptom_encoder = joblib.load('symptom_encoder.pkl')
disease_encoder = joblib.load('disease_encoder.pkl')
precaution_dict = joblib.load('precaution_dict.pkl')

# Receive JSON input from Node.js
input_json = sys.stdin.read()
data = json.loads(input_json)

# Encode symptoms
try:
    symptoms = data['symptoms']
    encoded_symptoms = [symptom_encoder.transform([s])[0] for s in symptoms]

    # Predict
    prediction = model.predict([encoded_symptoms])
    predicted_disease = disease_encoder.inverse_transform(prediction)[0]

    # Fetch precautions
    precautions = precaution_dict.get(predicted_disease, ["No precautions found."])

    # Output result
    result = {
        "disease": predicted_disease,
        "precautions": precautions
    }

    print(json.dumps(result))

except Exception as e:
    print(json.dumps({"error": str(e)}))
