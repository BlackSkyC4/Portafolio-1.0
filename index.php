<!DOCTYPE html>
<html lang="en">

    <?php
        require 'html/head.views.php';
    ?>
    
    <body>
    
    <div id="video">
        <div class="preloader">
            <div class="preloader-bounce">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <?php
            require 'html/header.views.php';
        ?>

        <!--video autoplay muted loop id="myVideo">
          <source src="images/video-bg.mp4" type="video/mp4">
        </video-->

        <div id="fullpage" class="fullpage-default">

            <?php
                require 'html/banner.views.php';
            ?>

            <?php 
                require 'html/about.views.php';
            ?>

            <?php
                require 'html/servicios.views.php';
            ?>

            <?php
                require 'html/skills.views.php';
            ?>
            
            <?php
                require 'html/work.views.php';
            ?>

            <?php
                require 'html/contato.views.php';
            ?>
            
        </div>

            <?php
                require 'html/media.views.php';
            ?>
    </div>  

    <script src="js/jquery.js"></script>

    <script src="js/bootstrap.min.js"></script>

    <script src="js/fullpage.min.js"></script>

    <script src="js/scrolloverflow.js"></script>

    <script src="js/owl.carousel.min.js"></script>

    <script src="js/jquery.inview.min.js"></script>

    <script src="js/form.js"></script>

    <script src="js/custom.js"></script>


  </body>
</html>