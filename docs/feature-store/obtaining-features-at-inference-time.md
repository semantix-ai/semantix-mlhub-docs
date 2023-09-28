---
sidebar_position: 7
---
# Obtaining Features at Inference Time

In Semantix ML Hub, retrieving features for online inference is a straightforward process made possible through our SDK method called `get_online_features`. This method allows you to obtain the most recent versions of features needed for inference in real-time. Here's how it works:

### Method Signature:

```python
get_online_features(entities, requested_features=None)
```

### Method Parameters:

- `entities` (list): A list of entities for which you want to retrieve features. Entities represent the specific instances or entities for which you need feature values.

- `requested_features` (list or None): An optional list of features you wish to retrieve. If set to None, all available features will be retrieved for the specified entities.

### Output:

The `get_online_features` method outputs the most recent versions of the requested features for the specified entities. These features are ready to be used for real-time inference, allowing you to make predictions and decisions based on the latest data.

By using this SDK method, you can easily access the features required for online inference, ensuring that your models receive up-to-date and relevant data for making accurate predictions in real-time scenarios. Semantix ML Hub simplifies the process of obtaining features during inference, enhancing the efficiency and effectiveness of your machine learning applications.