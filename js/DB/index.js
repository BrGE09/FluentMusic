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
    }
}