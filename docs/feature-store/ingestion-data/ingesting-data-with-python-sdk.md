---
sidebar_position: 2
---
# Ingesting Data with the Python SDK

The Semantix ML Hub Python SDK provides an easy way to ingest data into the feature store from your Python applications and scripts.

### Installation
First install the SDK:
```bash
pip install elemeno-ai-sdk
```

### Creating a Client
First you will need to export an environment variable with your Semantix ML Hub Api Key:
```bash
export SEMANTIX_ML_APIKEY=<YOUR_API_KEY>
```
Replace YOUR_API_KEY with your actual API key from your Semantix account. If you don't have an API key, [check this page](/).

Then create a client instance:
```python
from elemeno_ai_sdk.ml.features.feature_table import FeatureTable

ft = FeatureTable()
```

### Configuring the schema of your feature tables
In order to use the feature store you need to define the schema of your feature tables. This is an important step to ensure your feature store is organized and your features are stored using the appropriate data type.

You have the option to create the feature table schema definition via our GUI screen or via the SDK. The next steps will show how to perform this task using the SDK, if you prefer doing via GUI [check this page](/docs/feature-store/creating-a-feature-table).

The first step is to create a JSON schema file. The file should look like:
```json
{  
    "name": "creditcard_demo",  
    "entities": ["id"],  
    "schema": [  
        {"name": "v1", "type": "float"},  
        {"name": "v2", "type": "float"},
        {"name": "v3", "type": "float"},
        {"name": "v4", "type": "float"},
        {"name": "class", "type": "int"},
        {"name": "event_timestamp", "type": "timestamp"}
    ]
}
```
Here are a few details about what is the schema file.
- name: This is the unique identifier of our feature table.
- entities: The entity identifier is required, you can have composed identifiers with multiple properties if necessary. When reading features, you will may want to use the entity identifier to filter features for specific entities.
- schema: This is all fields in the dataset. Adding field event_timestamp to filter features between data.

Once you create your schema file you need to call the ingest schema method and create an instance of your feature table.

```python
import asyncio

asyncio.run(ft.create("./fs_schema.json"))
```

### Ingesting a Pandas DataFrame
The simplest way to ingest data is directly from a Pandas DataFrame:

Creating DataFrame
```python
import pandas as pd

credicard_demo = pd.DataFrame({
    'id': [1, 2, 3],
    'v1': [0.3, 0.5, 0.93],
    'v2': [0.1, 0.25, 0.29],
    'v3': [0.1, 0.25, 0.29],
    'v4': [0.1, 0.25, 0.29],
    'class': [0, 1, 1],
    'event_timestamp': ['2022-07-14 18:08:05.488248', '2022-07-14 18:08:06.581331', '2022-07-15 11:20:03.900023']
})
```

This will ingest the DataFrame into the feature table sepal_ft created in the previous step.
```python
from elemeno_ai_sdk.ml.features.feature_store import FeatureStore

fs = FeatureStore()
asyncio.run(fs.ingest('creditcard_demo', credicard_demo))
```

### Ingesting from other sources
You can also ingest data from any other source by converting it to pandas dataframe. The example below reads. from a CSV file:

```python
from elemeno_ai_sdk.ml.features.feature_store import FeatureStore

data = pd.read_csv(FILE_PATH)
fs = FeatureStore()
asyncio.run(fs.ingest('creditcard_demo', credicard_demo))
```
The source CSV in this example must have columns that match the properties you defined in the schema file.

### Scheduled ingestion
When integrating in production, oftentimes you will need to repeat the ingestion operation from time to time so that your feature store receives newly generated data from your sources. Our product does not offer a scheduler for your jobs via SDK, however you can use any pipeline management tool to have the job running on a cron.

The data ingested in the feature store is never updated and it will be only deleted when you close your account or request a deletion via support ticket. The data in the feature tables is append-only, and there's no constraints in the ID field. You can ingest the same features, with the same entity ID value several times. But you need to make a good use of the "event_timestamp" field so that when you're training models you can select the period of features you want to use. During inference time, our server will always retrieve the most recent version of the feature. If there are multiple items with the same entity ID, during inference, the one with the latest "event_timestamp" will be used.