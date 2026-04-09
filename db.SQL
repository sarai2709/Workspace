Create database SMC proyecto;
Use SMC proyecto, // es varchar por que se usan letras
Create table Usuario (
    cedula INT primary key, //se usa INT porque se utilizan numeros
    nombre Varchar , // es varchar por que se usan letras
    apellido Varchar,// es varchar por que se usan letras
    correo VARCHAR ) // es varchar por que se usan letras


Create database SMC proyecto;
Use SMC proyecto; // es varchar por que se usan letras
Create table Gastos (
    id gastos INT primary key, //se usa INT porque se utilizan numeros
    extraordinarios INT, //se usa INT porque se utilizan numeros
    FIJOS INT, //se usa INT porque se utilizan numeros
   descripción VARCHAR ); // es varchar por que se usan letras

    Create database SMC proyecto;
Use SMC proyecto; // es varchar por que se usan letras
Create table Ingresos(
    id_ ingresos VARCHAR primary key, // es varchar por que se usan letras
   ingresos extraordinarios INT, //se usa INT porque se utilizan numeros
   ingresos fijos INT, //se usa INT porque se utilizan numeros
   diferidos INT) ; //se usa INT porque se utilizan numeros

Create database SMC proyecto;
Use SMC proyecto; // es varchar por que se usan letras
Create table Sistema SMC (
    id_cuenta VARCHAR primary key , // es varchar por que se usan letras
    USUARIO VARCHAR(50), // es varchar por que se usan letras
    PRESUPUESTO INT , //se usa INT porque se utilizan numeros
    CATEGORIA VARCHAR  ); // es varchar por que se usan letras

Create database SMC proyecto;
Use SMC proyecto; // es varchar por que se usan letras
Create table presupuesto (
    id_ presupuesto INT primary key , //se usa INT porque se utilizan numeros
    gastos acumulados INT, //se usa INT porque se utilizan numeros
    monto límite INT , //se usa INT porque se utilizan numeros
    periodo INT ); //se usa INT porque se utilizan numeros

    Create database SMC proyecto;
Use SMC proyecto; // es varchar por que se usan letras
Create table categories (
    id_categoria INT primary key , //se usa INT porque se utilizan numeros
    tipo movimiento varchar, // es varchar por que se usan letras
    nombre varchar ); // es varchar por que se usan letras


    Create database SMC proyecto;
Use SMC proyecto; // es varchar por que se usan letras
Create table Cuenta (
    id_cuenta INT primary key , //se usa INT porque se utilizan numeros
    NOMBRE varchar, // es varchar por que se usan letras
    DIVISA INT ); //se usa INT porque se utilizan numeros


