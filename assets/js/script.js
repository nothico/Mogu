$(function () {


    // ========================================================================
    // ★トップに戻るボタンの非表示　→　一定量スクロールされたら表示させる
    // ========================================================================

    $(".to-top").hide();                    //.to-topを非表示にする

    $(window).on('scroll', function () {       //ブラウザがスクロールされたら以下の処理を行う。
        if ($(window).scrollTop() > 500) {  //スクロール量が500以上になったら、
            $(".to-top").fadeIn(500);       //.to-topを0.5秒かけてフェードインさせる。
        } else {                              //そうでなければ、
            $(".to-top").fadeOut(500);      //.to-topを0.5秒かけてフェードアウトさせる。
        }
    });

    // ========================================================================
    // ★トップに戻るボタンのスムーススクロールアニメーション (教科書p185の応用)
    // ========================================================================

    $(".to-top a").on('click', function () {                   //.to-topの中のaタグがクリックされたとき、
        $("html,body").animate({ scrollTop: 0 }, 500);    //0.5秒かけて画面の一番上までスクロールするアニメーションを実行
        return false;
    });

    //---------------------------------------------------------------------------------------------------------

    // ========================================================================
    // 体験予約フォームのバリデーション
    // ========================================================================

    $(function () {

        $(".alert").hide();
      
        $("#submitBtn").click(function () {
      
          let sendFlag = true;
      
          if (!$("#text").val()) {
            $("#textSection .alert").show();
            sendFlag = false;
          } else {
            $("#textSection .alert").hide();
          }

          if (!$("#text2").val()) {
            $("#textSection2 .alert").show();
            sendFlag = false;
          } else {
            $("#textSection2 .alert").hide();
          }


          if (!$("#text3").val()) {
            $("#textSection3 .alert").show();
            sendFlag = false;
          } else {
            $("#textSection3 .alert").hide();
          }



        //   if (!$("#textarea").val()) {
        //     $("#textareaSection .alert").show();
        //     sendFlag = false;
        //   } else {
        //     $("#textareaSection .alert").hide();
        //   }
      
          if ($("select").val() == "none") {
            $("#selectSection .alert").show();
            sendFlag = false;
          } else {
            $("#selectSection .alert").hide();
          }
      
      
        //   let radioCount = $('input[type = "radio"]:checked').length;
      
        //   if (radioCount < 1) {
        //     $("#radioSection .alert").show();
        //     sendFlag = false;
        //   } else {
        //     $("#radioSection .alert").hide();
        //   }
      
      
        //   let checkCount = $('input[type = "checkbox"]:checked').length;
      
        //   if (checkCount < 1) {
        //     $("#checkSection .alert").show();
        //     sendFlag = false;
        //   } else {
        //     $("#checkSection .alert").hide();
        //   }
      
          
          if (sendFlag == false) {
            return false;
          }
      
        });
      });


    //---------------------------------------------------------------------------------------------------------

    // ========================================================================
    //　★プラグイン「slick」の起動とカスタマイズ
    // ========================================================================

    $(".slider").slick({
        autoplay: true,          //自動再生on
        fade: true,              //横スクロールではなくフェードアニメにする
        arrows: false,           //ボタン非表示
        pauseOnHover: false,     //ホバー時の再生停止をoff
        pauseOnFocus: false,     //フォーカス時の再生停止をoff
        autoplaySpeed: 300,      //自動再生の速度（アニメーションの間隔）を0.5秒に
        speed: 5000              //アニメーションの動き自体の速度を3秒に
    });



   // ========================================================================
    // ナビゲーションを画面上部に固定
    // ========================================================================



  //   $(function () {

  //     $(window).on('scroll', function () {
  //         if ($('header').height() < $(window).scrollTop()) {
  //             $(".nav-area").css("position", "fixed");
  //         } else {
  //             $(".nav-area").css("position", "static");
  //         }
  //     });
  // });
  


      // ---------------------------------

    // フェードアップアニメを再生させるclass名をつける処理

    // 処理内容を関数にして設置
    function addClassfunction() {
      $('.fadeUp-trigger').each(function () {
          let frameIn = $(this).offset().top - $(window).height();

          if (frameIn < $(window).scrollTop() - 100) {
              $(this).addClass('fadeUpActive');
          }
      });
  }

  // ブラウザがスクロールされたら関数のスイッチをオン
  $(window).on('scroll', function () {
      addClassfunction();
  });

  // ページの読み込み終了時にも関数をオン
  addClassfunction();

  // slickを起動するコード
  $('.slider').slick({
      autoplay:true,
      fade:true,
      arrows:false,
      pauseOnHover:false,
      pauseOnFocus:false,
      autoplayspeed:500,
      speed:3000
  });

 // recipeのスムーススクロール
 
 $(function(){
  $('.gridArea a').on("click",function(){

      let target = $($(this).attr('href')).offset().top - 68;

      $('html,body').animate({scrollTop:target},500);
      
  });
});




});


