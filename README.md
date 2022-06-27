### NOTA: Puede ser ejecutado localmente solo por un usuario de Google Cloud que tenga permisos en el proyecto, debido a que está configurado para ser exportado como una función de firebase functions.



###### Para esto, se me deben solicitar los permisos a mi correo: leandrodrazic@gmail.com
###### Instalar Firebase CLI
###### Luego, clonar el repositorio
###### Ejecutar npm i
###### Y dentro de la carpeta functions, ejecutar el comando firebase serve


Para ver el código que realiza el análisis de la matriz, entrar a la carpeta functions, ahí habrán 3 carpetas, una para las rutas, otra para los controladores y otra para los servicios.
En la de los servicios está el archivo con los métodos que analizan la matriz.


La API está hosteada en Serverless Functions de Google Cloud, la base de datos utilizada para registrar las consultas fue Firestore.

Para consultar un ADN:

Realizar un POST a https://us-central1-mutantes-leandro.cloudfunctions.net/app/mutantes/mutant
con el cuerpo de la solicitud de tipo JSON y siguiendo el formato:
 
`{
“dna”:["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}`

###### El servicio retornará un código 200, mensaje OK en caso de que sea mutante y un 403 mensaje FORBIDDEN en caso de que no lo sea.
###### Si el body no tiene el formato correcto retornará 400 y mensaje body inválido.
###### En caso de que se produzca un error interno, retornará 500 con la descripción del error ocurrido.
###### Si la matriz no respeta el tamaño de NxN o incluye algún carácter que no está dentro de los correspondientes a genes, retornará error

#### Para consultar las estadisticas:
###### Realizar un GET a https://us-central1-mutantes-leandro.cloudfunctions.net/app/mutantes/stats
Debe retornar la cantidad de mutantes, personas y el ratio que se analizó.


## Coverage de los tests.

----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   82.19 |     87.5 |      75 |   81.69 |                   
 functions            |     100 |      100 |     100 |     100 |                   
  dbfs.js             |     100 |      100 |     100 |     100 |                   
 functions/services   |   80.88 |     87.5 |      75 |    80.3 |                   
  mutantes-service.js |   80.88 |     87.5 |      75 |    80.3 | 9,13,70,91,97-114 
----------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.323 s, estimated 1 s
