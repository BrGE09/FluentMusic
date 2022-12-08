var indexedDB = window.indexedDB;

function startDB()
{
    dataBase = indexedDB.open("mydb", 1);

    dataBase.onupgradeneeded = function (e)
    {
        active = dataBase.result;
        usuarios = active.createObjectStore("usuarios", { keyPath : 'id', autoIncrement : true});
        var nick = usuarios.createIndex('by_nick', 'nick', { unique : true });
        var password = usuarios.createIndex('by_password', 'password', { unique : false });
    };

    dataBase.onsuccess = function(e)
    {
        console.log('Base de datos cargada con éxito');
/*         add(); */
    };

    dataBase.onerror = function(e)
    {
        console.log('Error al cargar la base de datos');
    };
}

function add()
{
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readwrite");
    var object = data.objectStore("usuarios");
    var dummyData = 
    [
        {
            "nick":"Brandon",
            "password":"12345"
        },
        {
            "nick":"Julieta",
            "password":"12345678"
        },
        {
            "nick":"Samael",
            "password":"1234567"
        }
    ];

    dummyData.forEach
    (
        function(usuario)
        {
            object.put(usuario);
        }
    );

    data.oncomplete = function(e)
    {
        console.log('Usuario agregado correctamente');
/*         show(); */
    };
}

function show()
{
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readwrite");
    var object = data.objectStore("usuarios");

    var request = object.get(5);

    request.onsuccess = function(event)
    {
        console.log("Nick: " + request.result.nick + " Password: " + request.result.password);
/*         del(); */
    };
}

function del()
{
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readwrite");
    var object = data.objectStore("usuarios");

    var request = object.delete(5);

    request.onsuccess = function(event)
    {
        console.log("Elemento eliminado")
    };
}

window.addEventListener('load', startDB, false);