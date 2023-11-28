---
sidebar_position: 1
---
# Obtaining Features for Training a Model

In Semantix ML Hub, retrieving features for training your machine learning models is made easy through our SDK method called `get_training_features`. This method provides a straightforward way to obtain the necessary features for your training data. Here's how it works:

### Method Signature:

```python
get_training_features(
        self,
        feature_table_name: str,
        entities: List[str] = None,
        features: List[str] = None,
        date_from: Optional[str] = None,
        date_to: Optional[str] = None,
    ) -> pd.DataFrame
```

### Method Parameters:

- `feature_table_name` (str): The name of the feature view from which you want to retrieve features.

- `entities` (list or None): A list of entities fields you want to select. If set to None, all entities fields will be selected.

- `features` (list or None): A list of features you want to select. If set to None, all available features will be selected.

- `date_from` (str or None): The start date of the training period. If set to None, the start date of the feature table will be used.

- `date_to` (str or None): The end date of the training period. If set to None, the end date of the feature table will be used.

### Output:

The `get_training_features` method outputs a pandas DataFrame containing all the selected features. You can use this DataFrame for training your machine learning models with the relevant training data.

By leveraging this SDK method, you can effortlessly obtain the features you need for your model training, making it a convenient and efficient process within Semantix ML Hub.