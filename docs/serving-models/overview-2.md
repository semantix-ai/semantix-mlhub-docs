---
sidebar_position: 1
---
# Serving Models - Overview

In Semantix ML Hub, we offer a robust model serving solution that allows you to deploy inference servers, essentially creating APIs to serve your machine learning models via HTTP requests. This capability enables you to make predictions and perform inference using your trained models seamlessly.

### Key Features:

1. **Model Selection:**
   - You have the flexibility to define a unique model identifier, making it easy to manage and identify different models.

2. **Model Frameworks:**
   - Our platform supports a wide range of popular model frameworks, including Scikit-learn, PyTorch, TensorFlow, TensorFlow Lite, Keras, and ONNX. This ensures compatibility with your preferred machine learning frameworks.

3. **Model Upload:**
   - You can upload your trained model file, whether it's a pickled model or a .pt model, to our platform for deployment.

4. **Request Structure Definition:**
   - Define how you want the inference server to receive requests, ensuring that it aligns with your specific use case. You have multiple options:
     - Utilize a feature table: All the necessary features for inference are preloaded into a feature table. You only need to pass the business ID defined in the feature table when making a request.
     - Send JSON requests: You can send JSON data with all the required features for inference at the time of the request.
     - Combine the above methods: Customize your request structure by using a combination of feature tables and JSON requests to meet your unique needs.

### Benefits:

- **Easy Deployment:** Deploying your machine learning models as inference servers is a straightforward process, allowing you to quickly put your models into production.

- **Framework Compatibility:** Our platform supports a variety of popular machine learning frameworks, ensuring that you can deploy models trained with your preferred tools.

- **Flexible Request Handling:** Define the request structure that best suits your use case, whether it involves feature tables, JSON data, or a combination of both.

- **Scalability:** Serve models at scale by utilizing HTTP requests, making it easy to handle predictions for a large number of requests from your applications or services.

Semantix ML Hub's model serving capabilities simplify the process of deploying and serving machine learning models, enabling you to harness the power of your models in real-world applications with ease.