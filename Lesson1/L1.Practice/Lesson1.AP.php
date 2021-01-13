<html>

<body>

    Hi <?php echo htmlspecialchars($_POST['fname']); ?>.
    You are <?php echo (int)$_POST['email']; ?> years old.

</body>

</html>