<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue.js twitter</title>
    <link href="sass/style.css" rel="stylesheet">
    <script src="https://unpkg.com/vue@next"></script>

</head>
<body>
    <header>
        <div class="header_logo"><span>Vue.Js Twitter</span></div>
        <nav class="header_nav"></nav>
    </header>
    <div class="wrapper">
        <div class="left-column">
            <?php include 'parts/left-column.html' ?>
        </div>
        <div class="central-column">
            <?php include 'parts/tweet-form.vue'?>
        </div>
        <div class="right-column">
            <?php include 'parts/right-column.html'?>
        </div>
    </div>


<script src="js/script.js"></script>
</body>
</html>