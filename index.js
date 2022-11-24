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

    database.onsuccess = function(e)
    {
        console.log('Base de datos cargada con éxito');
        add();
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
    };
}

window.addEventListener('load', startDB, false);