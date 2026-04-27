<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Testeur de Palette</title>


    <script>
        function updateColor(targetId, value) {
            const display = document.getElementById(targetId);
            // On applique la valeur directement au style background
            display.style.backgroundColor = value;
        }
    </script>

</body>
</html>
