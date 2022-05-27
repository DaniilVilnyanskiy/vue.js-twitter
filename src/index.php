<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Vue.js twitter</title>
    <link href="sass/style.css" rel="stylesheet">
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <meta name="viewport" content="width=device-width, user-scalable=no">
</head>
<body>
    <header>
        <div class="header_logo"><span>Vue.Js Twitter</span></div>
        <a> </a>
        <nav class="header_nav"></nav>
    </header>
    <div class="wrapper">
        <div class="left-column">
            <?php include 'parts/left-column.html' ?>
        </div>
        <div class="central-column">
            <?php include 'parts/tweet-form.vue'?>
            <!--<ul class="app__ul">
                <?php /*include 'php/database.php' */?>
            </ul>-->
        </div>
        <div class="right-column">
            <?php include 'parts/right-column.html'?>
        </div>
    </div>


<script src="js/script.js"></script>
</body>
</html>