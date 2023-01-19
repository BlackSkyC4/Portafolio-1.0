;
(function ($, window, document, undefined) {
    'use strict';
    //funcion para obtener el ancho de la ventana
    var $winW = function () {
        return $(window).width();
    };
    //funcion para obtener el alto de la ventana
    var $winH = function () {
        return $(window).height();
    };
    //funcion para establecer el tamaño del elemento
    var $screensize = function (element) {
        $(element).width($winW()).height($winH());
    };
    //funcion para verificar el tamaño de la pantalla
    var screencheck = function (mediasize) {
        if (typeof window.matchMedia !== "undefined") {
            //usando matchMedia de JS
            var screensize = window.matchMedia("(max-width:" + mediasize + "px)");
            if (screensize.matches) {
                return true;
            } else {
                return false;
            }
        } else {
            //usando jQuery
            if ($winW() <= mediasize) {
                return true;
            } else {
                return false;
            }
        }
    };

    $(document).ready(function () {
        $(window).on('load', function () {
            // Oculta el preloader (cargando) cuando la página termina de cargar
            $('.preloader').fadeOut();

            // Encuentra cada fila con clase 'animated-row'
            $('.animated-row').each(function () {
                var $this = $(this);

                // Encuentra cada elemento con clase 'animate' dentro de la fila
                $this.find('.animate').each(function (i) {
                    var $item = $(this);
                    var animation = $item.data('animate');

                    // Agrega un evento 'inview' (cuando el elemento es visible en la pantalla)
                    $item.on('inview', function (event, isInView) {
                        if (isInView) {
                            // Agrega la clase 'animated' y la clase de la animación específica después de un retraso
                            setTimeout(function () {
                                $item.addClass('animated ' + animation).removeClass('animate');
                            }, i * 50);
                        } else if (!screencheck(767)) {
                            // Si el elemento ya no está en la pantalla y el tamaño de pantalla es mayor a 767px, 
                            // se quitan las clases 'animated' y de la animación específica
                            $item.removeClass('animated ' + animation).addClass('animate');
                        }
                    });
                });
            });

            // Si existe un elemento con clase 'facts-list', se inicia el carousel
            if ($('.facts-list').length) {
                $('.facts-list').owlCarousel({
                    loop: true,
                    nav: false,
                    dots: true,
                    items: 3,
                    margin: 30,
                    autoplay: false,
                    smartSpeed: 700,
                    autoplayTimeout: 6000,
                    responsive: {
                        0: {
                            items: 1,
                            margin: 0
                        },
                        460: {
                            items: 1,
                            margin: 0
                        },
                        576: {
                            items: 2,
                            margin: 20
                        },
                        992: {
                            items: 3,
                            margin: 30
                        }
                    }
                });
            }
        });
    });

    if ($('.services-list').length) {
        // Verifica si el elemento con la clase "services-list" existe en el DOM
        $('.services-list').owlCarousel({
            loop: true, // Habilita el loop para que las diapositivas se reproduzcan en ciclo
            nav: false, // Deshabilita los controles de navegación
            dots: true, // Habilita los puntos de navegación
            items: 3, // Cantidad de elementos a mostrar
            margin: 30, // Margen entre cada elemento
            autoplay: false, // Deshabilita el autoplay
            smartSpeed: 700, // Velocidad de transición entre diapositivas
            autoplayTimeout: 6000, // Tiempo entre transiciones en modo autoplay
            responsive: { // Configuraciones de responsive para diferentes tamaños de pantalla
                0: {
                    items: 1, // En pantallas pequeñas, solo mostrará 1 elemento
                    margin: 0 // Sin margen entre elementos
                },
                460: {
                    items: 1, // En pantallas pequeñas, solo mostrará 1 elemento
                    margin: 0 // Sin margen entre elementos
                },
                576: {
                    items: 2, // En pantallas medianas, mostrará 2 elementos
                    margin: 20 // Con 20px de margen entre elementos
                },
                992: {
                    items: 3, // En pantallas grandes, mostrará 3 elementos
                    margin: 30 // Con 30px de margen entre elementos
                }
            }
        });
    }
    if ($('.gallery-list').length) {
        // Verifica si el elemento con la clase "gallery-list" existe en el DOM
        $('.gallery-list').owlCarousel({
            loop: false, // Deshabilita el loop
            nav: false, // Deshabilita los controles de navegación
            dots: true, // Habilita los puntos de navegación
            items: 3, // Cantidad de elementos a mostrar
            autoplay: true, // Habilita el autoplay
            smartSpeed: 700, // Velocidad de transición entre diapositivas
            autoplayTimeout: 4000,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                576: {
                    items: 2,
                    margin: 20
                },
                992: {
                    items: 3,
                    margin: 30
                }
            }
        });
    }
    // Si el elemento con clase .testimonials-slider existe en el DOM
    if ($('.testimonials-slider').length) {
        // Inicializar el plugin Owl Carousel en el elemento con clase .testimonials-slider
        $('.testimonials-slider').owlCarousel({
            // Configuración del plugin
            loop: true, // Hacer que el carousel sea un loop infinito
            nav: false, // Ocultar los botones de navegación
            dots: true, // Mostrar los puntos de navegación
            items: 1, // Mostrar un item por vez
            margin: 30, // Margen entre items
            autoplay: true, // Activar autoplay
            smartSpeed: 700, // Velocidad de transición
            autoplayTimeout: 6000, // Tiempo de espera entre transiciones en milisegundos
            // Configuración de la respuesta a diferentes tamaños de pantalla
            responsive: {
                0: {
                    items: 1, // Mostrar un item en dispositivos pequeños
                    margin: 0 // Sin margen en dispositivos pequeños
                },
                768: {
                    items: 1 // Mostrar un item en pantallas de tamaño 768px o más grandes
                }
            }
        });
    }

    // Este bloque de código verifica si existe un elemento con la clase "fullpage-default" en el HTML
    if ($('.fullpage-default').length) {
        // Si existe, crea una nueva instancia de "fullpage" y le asigna las siguientes opciones:
        var myFullpage = new fullpage('.fullpage-default', {
            licenseKey: ' C7F41B00-5E824594-9A5EFB99-B556A3D5', // Llave de licencia para el uso de fullpage
            anchors: ['slide01', 'slide02', 'slide03', 'slide04', 'slide05', 'slide06', 'slide07'], // Anclas para cada slide
            menu: '#nav', // Elemento donde se ubicará el menú de navegación
            lazyLoad: true, // Carga solo las imágenes necesarias
            navigation: true, // Habilitar/deshabilitar la navegación
            navigationPosition: 'right', // Posición de la navegación
            scrollOverflow: true, // Habilitar/deshabilitar el desbordamiento del scroll
            responsiveWidth: 768, // Ancho mínimo para activar el modo responsivo
            responsiveHeight: 600, // Altura mínima para activar el modo responsivo
            responsiveSlides: true // Habilitar/deshabilitar el modo responsivo para las diapositivas
        });
    }

    // Escucha el evento click en el boton .navbar-toggle
    $(document).on('click', '.navbar-toggle', function () {
        // Muestra/oculta el elemento con clase .navbar-collapse con un efecto de deslizamiento de 300ms
        $('.navbar-collapse').slideToggle(300);
        return false;
        // Escucha el evento click en los elementos <a> dentro de un <li> dentro de un elemento con clase .navigation-menu
    }).on('click', '.navigation-menu > li > a', function () {
        // Oculta el elemento con clase .navbar-collapse con un efecto de deslizamiento de 300ms
        $('.navbar-collapse').slideUp(300);
        // Escucha el evento click en los elementos con clase .next-section
    }).on('click', '.next-section', function () {
        // Mueve hacia abajo una sección en el plugin fullpage.js
        fullpage_api.moveSectionDown();
        // Escucha el evento inview en los elementos con clase .facts-row
    }).on('.facts-row', function (event, isInView) {
        // Selecciona cada elemento con clase .count-number y aplica una animación
        $('.count-number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
            // Setea un temporizador de 1000ms para remover la clase .count-number y agregar la clase .counted
            setTimeout(function () {
                $('.count-number').removeClass('count-number').addClass('counted');
            }, 1000);
        });
    });

    $('.skills-row').on('inview', function (event, isInView) {
        $(this).addClass('view'); // Agrega clase "view" al elemento con clase "skills-row" al ser visible en la pantalla
    });
    $(document).on('click', '.menu-trigger', function () {
        $('body').toggleClass('sidemenu-open'); // Agrega/quita clase "sidemenu-open" al cuerpo al hacer clic en elemento con clase "menu-trigger"
    }).on('click', '.side-menu .navbar-nav li a', function () {
        $('body').removeClass('sidemenu-open'); // Quita clase "sidemenu-open" al cuerpo al hacer clic en elemento dentro de "side-menu .navbar-nav li a"
    });
})(jQuery, window, document);