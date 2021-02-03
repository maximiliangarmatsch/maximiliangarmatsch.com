export const onSubmitError = (error, e) => {
    console.warn('### FormHelpers:onSubmitError ERROR', error, e);
};

export const getNameOfFirstInvalidElement = errors => {
    return Object.keys(errors)[0];
};

export const setFocusOnFirstInvalidElement = (
    input,
    errors,
    name,
    prevSubmitCount,
    newSubmitCount,
    setNewSubmitCount
) => {
    if (errors[name] && getNameOfFirstInvalidElement(errors) === name) {
        if (prevSubmitCount !== newSubmitCount) {
            // only executes when user submits a form
            input && input.focus();
            setNewSubmitCount(newSubmitCount);
        }
    }
};
