---
sidebar_position: 2
---

# Create a Financial Risk Predictor
## 
In this guide, we will walk you through the process of using Semantix ML Hub to create a Financial Risk Predictor. This tool empowers you to build, deploy, and use a machine learning model for predicting financial risk, making data-driven decisions about loan defaults. Follow these step-by-step instructions to get started:

**1. Download the CSV**

Please download the following dataset: 
[financial_risk_dataset.csv](/files/financial_risk_dataset.csv)

**2. Add a Data Connector**

- Go to the **Data Connectors** section within Semantix ML Hub.
- Select "Add New."
- Upload the CSV file you downloaded in step 1.
- Provide a name for the data connector.
![finrisk1](/img/finrisk1.png)

**3. Create a Feature Table**

- Navigate to the **Feature Tables** page.
- Click on "Create Feature Table"
- Give your feature table a name.
- Select the CSV file used in the Data Connectors page.
![finrisk2](/img/finrisk2.png)

**4. Define Business Entity**

- Using only normal characters and numbers, name your Business Entity.
- Select '**index**' as the **Identifier** and  '**string**' as the **Type**.
![finrisk3](/img/finrisk3.png)

**5. Add Features to the Feature Table**

- Click on "Add Feature."
- Add the following three features with their respective types:
  - **feature**: employed ,      **type**: integer
  - **feature**: bank_balance , **type**: float
  - **feature**:annual_salary , **type**: float
![finrisk4](/img/finrisk4.png)

**6. Create the Feature Table**

- Click "Create" to create the Feature Table.
- Please wait until the Feature Table finishes deploying before moving onto the next step. You will know that the Feature Table is fully deployed when the status turns green.
![finrisk5](/img/finrisk5.png)

**7. Set Up the Inference Server**

- After the Feature Table is fully deployed, go to the **Inference Servers** tab.
- Select "Add Inference Server."
![finrisk6](/img/finrisk6.png)

- Name your Inference Server.
- Choose "ONNX" as the framework.
- Upload the default_model_1.onnx file (provided).
[default_model_1.onnx](/files/default_model_1.onnx)
- Configure your Request Body by adding '**index**' as your REQUEST_BODY_KEY.
![finrisk7](/img/finrisk7.png)

- Add the 3 features used when setting up your Feature Table. In the left column, select the dataset that was previously uploaded. In the right column, select the 3 features: **employed**, **bank_balance**, and** annual_salary**.
![finrisk8](/img/finrisk8.png)

**8. Wait for Inference Server Allocation**

- Your Inference Server is now created, but please allow a few minutes for your server to be fully deployed. . You can use this time to discuss other aspects of your project, or to generate an API Key.

**9. Generate an API Key**

- Head over to the **Account Settings / API** tab.
![finrisk9](/img/finrisk9.png)
- Select "Create New"
- Adjust the expiration date to your preferred date and select 'Create API Key'.
![finrisk10](/img/finrisk10.png)

**10. Send an Inference**

- Return to the Inference Server tab and make sure your server is deployed by viewing the **Status**. Once fully deployed, the status will turn green and you can move on to the next step.
![finrisk11](/img/finrisk11.png)

- Copy your Inference Server's API Endpoint.
- Use a tool that works as an API platform, provide your endpoint, API Key, and use the following JSON command to send a **POST** request:

```json
{
    "index": "2"
}
```

**11. Inference Results**

- After running the command, you will receive a confidence level indicating how likely the employee is to default on a loan.
![finrisk12](/img/finrisk12.png)

Follow these steps meticulously to create your Financial Risk Predictor using Semantix ML Hub. This tool empowers you to make informed financial decisions based on machine learning predictions.