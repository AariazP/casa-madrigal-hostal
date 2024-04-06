#!/bin/bash

# Función para renombrar imágenes dentro de un directorio dado
rename_images() {
  local dir="$1"
  local count=1

  # Cambiar al directorio dado
  cd "$dir" || return

  # Iterar sobre los archivos en el directorio actual
  for file in *; do
    if [ -f "$file" ]; then
      # Verificar si el archivo es una imagen (con extensión jpg, jpeg, png, gif)
      if [[ "$file" =~ \.(jpg|jpeg|png|gif)$ ]]; then
        # Obtener la extensión del archivo
        extension="${file##*.}"
        # Construir el nuevo nombre de archivo
        new_name="imagen_$count.$extension"
        # Renombrar el archivo
        mv "$file" "$new_name"
        # Incrementar el contador para el siguiente archivo
        ((count++))
      fi
    elif [ -d "$file" ]; then
      # Si es un directorio, llamar recursivamente a la función en este directorio
      rename_images "$file"
    fi
  done

  # Regresar al directorio padre al salir del subdirectorio
  cd ..
}

# Directorio inicial donde se inicia el proceso (ruta relativa o absoluta)
starting_directory="$1"

# Verificar si se proporcionó un directorio como argumento
if [ -z "$starting_directory" ]; then
  echo "Uso: $0 <directorio>"
  exit 1
fi

# Verificar si el directorio dado existe
if [ ! -d "$starting_directory" ]; then
  echo "Error: El directorio '$starting_directory' no existe."
  exit 1
fi

# Llamar a la función para iniciar el proceso de cambio de nombre de imágenes
rename_images "$starting_directory"
