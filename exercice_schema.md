# Exercice DDL

1. Créer une nouvelle collection appelée `colors`. Cette collection contiendra 4 propriétés:
    - **red**: int (0-255)    requis
    - **green**: int (0-255) requis
    - **blue**: int (0-255) requis
    - **alpha**: number (0-1) falcultatif

 2. Créer une collection `books`. Cette collection sera composée
    - **title**: string minLength 2
    - **genre**: enum ['Adventure', 'Science-Fiction', 'Thriller'],
    - **isbn**: string composé de 13 chiffres
    - **author** object: 

        - **name**: type: string
        - **first_name**: string
 