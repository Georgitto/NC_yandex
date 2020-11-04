function f() {
    alert( this );
}

user = {
    g: f.bind(null)
};

user.g();

// Ответ - null, так как функции g имеет значение функции f с лексическим окружением, равным null.