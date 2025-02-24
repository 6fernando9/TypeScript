# Verifica si se ha pasado un parámetro
if [ -z "$1" ]; then
    echo "Error: Debes pasar un archivo como parámetro."
    exit 1
fi

# Asigna el primer parámetro a una variable
ARCHIVO=$1

# Verifica si el archivo existe
if [ ! -f "$ARCHIVO" ]; then
    echo "Error: El archivo '$ARCHIVO' no existe."
    exit 1
fi

# Extrae el nombre del archivo sin la extensión .ts
NOMBRE_BASE=$(basename "$ARCHIVO" .ts)

# Compila el archivo TypeScript en modo observación (-w)
echo "Compilando $ARCHIVO con tsc -w..."
tsc "$ARCHIVO" -w

# Verifica si tsc tuvo errores
if [ $? -eq 0 ]; then
    # Si no hay errores, ejecuta el archivo JavaScript generado con Node.js
    echo "Compilación exitosa. Ejecutando $NOMBRE_BASE.js..."
    node "$NOMBRE_BASE.js"
else
    echo "Error: Hubo errores durante la compilación. No se ejecutará el archivo."
    exit 1
fi
