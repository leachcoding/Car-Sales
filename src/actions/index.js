export const AddFeature = 'AddFeature';

export const addFeature = feature => {
  return {type: AddFeature, payload: feature};
}

export const RemoveFeature = 'RemoveFeature';

export const removeFeature = feature => {
  return {type: RemoveFeature, payload: feature};
}

export const UpdateTotal = 'UpdateTotal';

export const updateTotal = total => {
  return {type: UpdateTotal, payload: total};
}
