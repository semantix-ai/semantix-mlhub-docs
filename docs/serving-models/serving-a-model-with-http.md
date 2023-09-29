---
sidebar_position: 2
---
# Serving a Model via HTTP

Serving your machine learning model via HTTP in Semantix ML Hub is a streamlined process that allows you to deploy your models quickly and make predictions accessible through HTTP requests. Follow these steps to serve a model:

1. **Access Inference Servers Page:**
   - Navigate to the Inference Servers page within Semantix ML Hub.
![infserver](/img/infserver.png)

2. **Add Inference Server:**
   - Click on the "Add Inference Server" button to initiate the model serving setup.
![infserveadd](/img/infserveadd.png)

1. **Define Model Name:**
   - Provide a unique and descriptive name for the particular model you wish to serve. This identifier will make it easier to manage and distinguish your models.
![infserve_name](/img/infserve_name.png)

1. **Select Model Framework:**
   - Choose the appropriate model framework from the available options. Semantix ML Hub supports various frameworks, including Scikit-learn, PyTorch, TensorFlow, TensorFlow Lite, Keras, and ONNX.

2. **Upload Model File:**
   - Upload the trained model file from your local computer. This file should contain the necessary model parameters and weights for inference.
![infserve_frame](/img/infserveframe.png)

1. **Configure Request Body:**
   - Define the request body that the inference server should expect when receiving HTTP requests.
![infserveupl](/img/infserveupl.png)


7. **Configure from Features:**
   - Add the features from your feature tables.
![infserveft](/img/infserveft.png)

8. **Create Inference Server:**
   - After configuring the model's settings and features, click on the "Create Inference Server" button to finalize the deployment process.
![infserve_create](/img/infserve_create.png)

Once you've completed these steps, your model will be served via HTTP, and you'll be ready to make predictions and perform inference by sending HTTP requests to the designated inference server. This streamlined approach to model deployment ensures that your machine learning models are readily accessible for real-world applications and integration with various services.