$(window).on('scroll', function () {

    const scrollPosition = $(this).scrollTop();
    // console.log(scrollPosition);
    const windowHeight = $(window).height();
    // console.log(windowHeight);

    const $knowledge = $('.knowledge');
    const knowledgeFromTop = $knowledge.offset().top;
    // console.log (knowledgeFromTop);
    const knowledgeHeight = $knowledge.outerHeight();
    // console.log(knowledgeHeight);

    const $perfection = $('.perfection');
    const perfectionFromTop = $perfection.offset().top;
    // console.log (perfectionFromTop);
    const perfectionHeight = $perfection.outerHeight();
    // console.log(knowledgeHeight);

    const $growth = $('.growth');
    const growthFromTop = $growth.offset().top;
    const growthHeight = $growth.outerHeight();

    const $article1 = $('.article1');
    const article1FromTop = $article1.offset().top;
    const articleHeight = $article1.outerHeight();

    const $header = $('header');
    const headerTop = $header.offset().top;
    const headerHeight = $header.outerHeight();

     console.log(headerTop);

    $header.css({
        'opacity': 1- scrollPosition/(headerHeight+headerTop)
    })


    if (scrollPosition > knowledgeFromTop + knowledgeHeight - windowHeight) {
        $('.knowledge').addClass('active')

    }


    if (scrollPosition > perfectionFromTop + perfectionHeight - windowHeight) {
        $('.perfection').addClass('active')

    }

    if (scrollPosition > growthFromTop + growthHeight - windowHeight) {
        $('.growth').addClass('active')

    }


    if (scrollPosition > growthFromTop) {
        $('.article1').addClass('active')

    }
    if (scrollPosition > article1FromTop + (articleHeight / 2)) {
        $('.article2').addClass('active')

    }
    if (scrollPosition < 400) {
        $('*').removeClass('active')

    }




})























// <script>
// $(window).on('scroll',function(){

// const topTitle = $('.title').offset().top ;
// const topInvolvment = $('.involvment').offset().top ;
// const topKnowledge = $('.knowledge').offset().top ;
// const topPerfection = $('.perfection').offset().top ;
// const topGrowth = $('.growth').offset().top ;
// const scrollPosition = $(document).scrollTop();

// if( scrollPosition>topTitle){

//     $('.knowledge').addClass('active')
// }
// if( scrollPosition<topInvolvment){

//     $('.perfection, .knowledge, .growth, .article1').removeClass('active')
// }
// if( scrollPosition>topKnowledge){
// $('.perfection').addClass('active')
// }

// if( scrollPosition>topPerfection){
// $('.growth').addClass('active')
// }

// if( scrollPosition>topGrowth){
// $('.article1').addClass('active')
// }



// })

// </script>