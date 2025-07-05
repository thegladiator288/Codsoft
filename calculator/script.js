let Result = document.getElementById('result');

function insertValue(value) {
    Result.value += value;
}

function cleartheResult() {
    Result.value = '';

}

function deletetheResult() {
    Result.value = Result.value.slice(0, -1);
}

function calculatetheResult() {
    try {

        Result.value = eval(Result.value);
    }
    catch (error) {
        Result.value = "error";
    }
}






